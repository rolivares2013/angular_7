import { EquipmentDetail } from "./equipment-detail";

/**
 * A model for an individual corporate employee
 */
export class Equipment {
   /*  functionalLocation: string;
    functionalLocationsDescription: string;
    tagNumber: string;
    centerCost: string;
    component: EquipmentDetail;

    constructor(functionalLocation: string, functionalLocationsDescription: string, tagNumber: string, centerCost: string, component :EquipmentDetail){
        this.functionalLocation = functionalLocation;
        this.functionalLocationsDescription = functionalLocationsDescription;
        this.tagNumber = tagNumber;
        this.centerCost = centerCost;
        this.component = component; 
    } */


    id: number;
    functionalLocation:string;
    functionalLocationsDescription:string;
    idTagNumber: string;
    centerCost:string;

    constructor(id: number, functionalLocation: string, functionalLocationsDescription: string, idTagNumber: string, centerCost :string){
        this.id = id;
        this.functionalLocation = functionalLocation;
        this.functionalLocationsDescription = functionalLocationsDescription;
        this.idTagNumber = idTagNumber;
        this.centerCost = centerCost; 
    }
}