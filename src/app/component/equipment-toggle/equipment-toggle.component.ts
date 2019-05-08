import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MockServerResultsService } from "../services/equipment-toggle.service";
import { PagedData } from "../models/paged-data";
import { Equipment } from "../models/equipment";
import { Page } from "../models/page";


@Component({
  selector: 'app-equipment-toggle',
   template: `
  <div>
<ngx-datatable
        #myTable
        class='material expandable'
        style="width: 90%"
        class="material"
        [rows]="rows"
        [columnMode]="'force'"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [selectionType]="'checkbox'"
        [limit]="5"
        (activate)="onActivate($event)"
        (select)='onSelect($event)'>

      <!-- Row Detail Template -->
      <ngx-datatable-row-detail [rowHeight]="100" #myDetailRow (toggle)="onDetailToggle($event)">
        <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>
          <div style="padding-left:35px;">
            <div><strong>Components Equipment</strong></div>
            <div>{{row.components}}</div>
          </div>
        </ng-template>
      </ngx-datatable-row-detail>

       <ngx-datatable-column
                [width]="50"
                [resizeable]="false"
                [sortable]="false"
                [draggable]="false"
                [canAutoResize]="false">
                <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>
                  <a
                    href="javascript:void(0)"
                    [class.datatable-icon-right]="!expanded"
                    [class.datatable-icon-down]="expanded"
                    title="Expand/Collapse Row"
                    (click)="toggleExpandRow(row)">
                  </a>
                </ng-template>
           </ngx-datatable-column>

        <ngx-datatable-column [width]="30" [sortable]="false" [canAutoResize]="false" [draggable]="false" [resizeable]="false">
            <ng-template ngx-datatable-header-template let-value="value" let-allRowsSelected="allRowsSelected" let-selectFn="selectFn">
              <input type="checkbox" [checked]="allRowsSelected" (change)="selectFn(!allRowsSelected)"/>
            </ng-template>
            <ng-template ngx-datatable-cell-template let-value="value" let-isSelected="isSelected" let-onCheckboxChangeFn="onCheckboxChangeFn">
              <input type="checkbox" [checked]="isSelected" (change)="onCheckboxChangeFn($event)"/>
            </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="functionalLocation"></ngx-datatable-column>
        <ngx-datatable-column name="functionalLocationsDescription"></ngx-datatable-column>
        <ngx-datatable-column name="tagNumber"></ngx-datatable-column>
        <ngx-datatable-column name="centerCost"></ngx-datatable-column>
      </ngx-datatable>

  </div>`,
  styleUrls: ['./equipment-toggle.component.css']
})
export class EquipmentToggleComponent implements AfterViewInit {
  page = new Page();
  rows = new Array<Equipment>();
  cache: any = {};

  

  @ViewChild('myTable') table;

  private isLoading: boolean = false;

  constructor(private serverResultsService: MockServerResultsService) {
    this.setPage({offset: 0, pageSize: 10});
  }



  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  ngAfterViewInit() {
    this.table.bodyComponent.updatePage = function(direction: string): void {
      let offset = this.indexes.first / this.pageSize;

      if (direction === 'up') {
        offset = Math.ceil(offset);
      } else if (direction === 'down') {
        offset = Math.floor(offset);
      }

      if (direction !== undefined && !isNaN(offset)) {
        this.page.emit({ offset });
      }
    }
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.isLoading = true;
    this.page.pageNumber = pageInfo.offset;
    this.page.size = pageInfo.pageSize;

    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;

      let rows = this.rows;
      if (rows.length !== pagedData.page.totalElements) {
        rows = Array.apply(null, Array(pagedData.page.totalElements));
        rows = rows.map((x, i) => this.rows[i]);
      }

      // calc start
      const start = this.page.pageNumber * this.page.size;

      // set rows to our new rows
      pagedData.data.map((x, i) => rows[i + start] = x);
      this.rows = rows;
      this.isLoading = false;
    });
  }

}
