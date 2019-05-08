import { v } from "@angular/core/src/render3";

export let settings = {
  actions: false,
  columns: {
    id: {
      title: 'ID',
      filter: true
    },
    nameWorkshop: {
      title: 'Name',
      filter: true
    },
    dateRealization: {
      title: 'Date Begin',
      valuePrepareFunction: (value) => { 
        //return this.transformDate(value) 
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        var d = new Date(value);
        var day = d.getDate();
        var monthIndex = d.getMonth();
        var year = d.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      },
      filter: false
    },
    dateEnd: {
      title: 'Date End',
      valuePrepareFunction: (value) => { 
        //return this.transformDate(value) 
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        var d = new Date(value);
        var day = d.getDate();
        var monthIndex = d.getMonth();
        var year = d.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      },
      filter: false
    },
    comentary: {
      title: 'Comentary',
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


