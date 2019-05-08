/**
 * A model for an individual corporate employee
 */
export class EquipmentCrud {

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

    

    constructor(id: number, functionalLocation: string, functionalLocationsDescription: string, idTagNumber: string, 
        centerCost :string,type:string,photo:string,video:string,planes:string, father:number,StatusCodeId:number,TypeMachineId:number){
        this.id = id;
        this.functionalLocation = functionalLocation;
        this.functionalLocationsDescription = functionalLocationsDescription;
        this.idTagNumber = idTagNumber;
        this.centerCost = centerCost; 
        this.type = type; 
        this.photo = photo; 
        this.video = video; 
        this.planes = planes; 
        this.father = father;
        this.StatusCodeId = StatusCodeId; 
        this.TypeMachineId = TypeMachineId; 
    }
}

