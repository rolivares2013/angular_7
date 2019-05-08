import { Component } from '@angular/core';
import * as tableData from './smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { WorkshopService } from '../services/workshop.service';
import { DatePipe } from '@angular/common';

import { Workshop } from '../models/workshop';
import { EquipmentCrud } from 'src/app/component/models/equipmentCrud';
import { Router } from '@angular/router';



@Component({
  templateUrl: './form-list-equipment.component.html'
})
export class FormListEquipmentComponent {

  constructor(private WorkshopService: WorkshopService,private datePipe: DatePipe,private router: Router) {}

  settings = tableData.settings;
  equipmentCrud: EquipmentCrud[];

  ngOnInit(): void {
    this.getEquipmentsAll ();
    }  

    getEquipmentsAll() {
      return this.WorkshopService.getEquipmentsAll()
                 .subscribe(
                  equipmentCrud => {
                    console.log(equipmentCrud);
                    this.equipmentCrud = equipmentCrud
                   }
             );
    }


    transformDate(value) {
      let newValue;
      newValue = this.datePipe.transform(value, 'dd.MM.yyyy');
      return newValue;
    }

    editWorkShop(event){

      console.log('equipment:');
      console.log(event.data);
      console.log(event.data.id);

     // $.parseJSON(JSON.stringify(this.rowsSelectedEqpLeft));

     //this.router.navigateByUrl('forms/formworkshop');
     this.router.navigate(['/forms/formequipment'], {queryParams:{equipment: event.data.id}});

    }

    callWorkShop(){

      this.router.navigateByUrl('forms/formequipment');

    }
}


