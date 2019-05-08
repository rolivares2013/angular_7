import { EquipmentDetail } from "./equipment-detail";

/**
 * A model for an individual corporate employee
 */
export class Businessinformation {
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

    productionUnitHour: string ; 
    productionPeriod:    string ; 
    costPerUnit:    string ; 
    productionUnit:  string ; 
    hoursOfOperation :  string ; 
    downtimeCalculations :  string ; 
    equipmentRuntime :  string ; 
    criticality :  string ; 
    criticalitySec :  string ; 
    functionalLocation :  string ; 
    EquipmentId :  number ; 
    id:number;


    constructor(id: number, productionUnitHour: string, productionPeriod: string, costPerUnit: string, productionUnit: string, hoursOfOperation :string, 
        downtimeCalculations :string,equipmentRuntime :string,criticality :string,criticalitySec :string,functionalLocation :string, EquipmentId:number){
        this.id =  id ;
        this.productionUnitHour = productionUnitHour;
        this.productionPeriod = productionPeriod;
        this.costPerUnit = costPerUnit;
        this.productionUnit = productionUnit;
        this.criticality = criticality;
        this.hoursOfOperation = hoursOfOperation;
        this.downtimeCalculations = downtimeCalculations;
        this.equipmentRuntime = equipmentRuntime; 
        this.criticalitySec = criticalitySec; 
        this.functionalLocation = functionalLocation; 
        this.EquipmentId = EquipmentId
    }
}