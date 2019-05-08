import { EquipmentDetail } from "./equipment-detail";

/**
 * A model for an individual corporate employee
 */
export class Equipment {

    id: number;
    functionalLocation:string;
    functionalLocationsDescription:string;
    idTagNumber: string;
    centerCost:string;
    type:string;
    photo:string;
    video:string;
    planes:string;
    father:number;
    StatusCodeId:number;
    TypeMachineId:number;

    constructor(id: number, functionalLocation: string, functionalLocationsDescription: string, idTagNumber: string, centerCost :string){
        this.id = id;
        this.functionalLocation = functionalLocation;
        this.functionalLocationsDescription = functionalLocationsDescription;
        this.idTagNumber = idTagNumber;
        this.centerCost = centerCost; 
    }
}