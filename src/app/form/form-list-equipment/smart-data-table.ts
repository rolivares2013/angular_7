import { v } from "@angular/core/src/render3";



/* id: number;
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
TypeMachineId:number; */


export let settings = {
  actions: false,
  columns: {
    id: {
      title: 'ID',
      filter: true
    },
    functionalLocation: {
      title: 'Name',
      filter: true
    },
    functionalLocationsDescription: {
      title: 'Description',
      filter: false
    },
    idTagNumber: {
      title: 'Tag Number',
      filter: false
    },
    centerCost: {
      title: 'Center Cost',
      filter: true
    }
  }/* ,
  edit: {
    editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
  delete: {
    deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  } */


};


