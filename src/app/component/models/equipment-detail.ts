/**
 * A model for an individual EquipmentDetail
 */
export class EquipmentDetail {
    functionalLocation: string;
    functionalLocationsDescription: string;
    type: string;

    constructor(functionalLocation: string, functionalLocationsDescription: string, type: string){
        this.functionalLocation = functionalLocation;
        this.functionalLocationsDescription = functionalLocationsDescription;
        this.type = type;
    }
} 