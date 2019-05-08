import { Component } from '@angular/core';
import * as tableData from './smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { WorkshopService } from '../services/workshop.service';
import { DatePipe } from '@angular/common';

import { Workshop } from '../models/workshop';
import { Router } from '@angular/router';



@Component({
  templateUrl: './form-list-workshop.component.html'
})
export class FormListWorkshopComponent {

  constructor(private WorkshopService: WorkshopService,private datePipe: DatePipe,private router: Router) {}

  settings = tableData.settings;
  workshops: Workshop[];

  ngOnInit(): void {
    this.getWorkshops ();
    }  

    getWorkshops() {
      return this.WorkshopService.getWorkshops()
                 .subscribe(
                  workshops => {
                    console.log(workshops);
                    this.workshops = workshops
                   }
             );
    }


    transformDate(value) {
      let newValue;
      newValue = this.datePipe.transform(value, 'dd.MM.yyyy');
      return newValue;
    }

    editWorkShop(event){

      console.log('editWorkShop:');
      console.log(event.data);
      console.log(event.data.id);

     // $.parseJSON(JSON.stringify(this.rowsSelectedEqpLeft));

     //this.router.navigateByUrl('forms/formworkshop');
     this.router.navigate(['/forms/formworkshop'], {queryParams:{workshop: event.data.id}});

    }

    callWorkShop(){

      this.router.navigateByUrl('forms/formworkshop');

    }
}


