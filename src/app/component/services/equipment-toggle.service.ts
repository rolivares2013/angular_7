import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PagedData } from "../models/paged-data";
import { Equipment } from "../models/equipment";
import { Page } from "../models/page";
import { equipment } from '../../../assets/data/equipment';
import { EquipmentDetail } from "../models/equipment-detail";

//import { delay } from "rxjs/operators";
/**
 * A server used to mock a paged data result from a server
 */

@Injectable()
export class MockServerResultsService {

    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    public getResults(page: Page): Observable<PagedData<Equipment>> {
        //return Observable.of(equipment).delay(350).map(data => this.getPagedData(page));
        return Observable.of(equipment).map(data => this.getPagedData(page));
    }

    /**
     * Package companyData into a PagedData object based on the selected Page
     * @param page The page data used to get the selected data from companyData
     * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
     */
    private getPagedData(page: Page): PagedData<Equipment> {
        let pagedData = new PagedData<Equipment>();
        let componetData : EquipmentDetail;

        page.totalElements = equipment.length;
        page.totalPages = page.totalElements / page.size;
        let start = page.pageNumber * page.size;
        let end = Math.min((start + page.size), page.totalElements);
        for (let i = start; i < end; i++){
            let jsonObj = equipment[i];
            //let componetData = jsonObj.components;
            componetData.functionalLocation = equipment[i].components[1].functionalLocation;
            componetData.functionalLocationsDescription = equipment[i].components[1].functionalLocationsDescription;
            componetData.type = equipment[i].components[1].type;

          /*   let employee = new Equipment(jsonObj.functionalLocation, jsonObj.functionalLocationsDescription, jsonObj.tagNumber, jsonObj.centerCost,componetData);
            pagedData.data.push(employee); */
        }
        pagedData.page = page;
        return pagedData;
    }

}