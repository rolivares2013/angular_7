import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormsRoutes } from './forms.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormBasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { CheckradioComponent } from './checkbox-radio/cr.component';
import { ForminputsComponent } from './form-inputs/inputs.component';
import { GridsComponent } from './input-grids/grids.component';
import { InputgroupsComponent } from './input-groups/input-groups.component';
import { FormhorizontalComponent } from './form-horizontal/horizontal.component';
import { FormactionsComponent } from './form-actions/actions.component';
import { FormrowsepComponent } from './form-row-separator/row-sep.component';
import { FormstripedComponent } from './form-striped-row/striped.component';
import { FormdetailComponent } from './form-detail/detail.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormWorkshopComponent } from './form-workshop/workshop.component';
import { FormParticipantComponent } from './form-participant/participant.component';
/* 
 import { TreeComponent } from '../component/tree/tree.component';
import { TreeModule } from 'ng2-tree';  */

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EquipmentToggleComponent } from '../component/equipment-toggle/equipment-toggle.component';
import { FormListParticipantComponent } from './form-list-participant/form-list-participant.component';
import { FormListWorkshopComponent } from './form-list-workshop/form-list-workshop.component';

import { FormListEquipmentComponent } from './form-list-equipment/form-list-equipment.component';
import { FormEquipmentComponent } from './form-equipment/equipment.component';

@NgModule({
 // imports: [CommonModule, RouterModule.forChild(FormsRoutes), FormsModule,ReactiveFormsModule,TreeModule,NgbModule,Ng2SmartTableModule,NgxDatatableModule],
  //imports: [CommonModule, RouterModule.forChild(FormsRoutes), FormsModule,ReactiveFormsModule,NgbModule,Ng2SmartTableModule],
  imports: [CommonModule, RouterModule.forChild(FormsRoutes), FormsModule,ReactiveFormsModule,NgbModule,Ng2SmartTableModule,NgxDatatableModule],
  declarations: [
    FormBasicComponent,
    FormvalComponent,
    CheckradioComponent,
    ForminputsComponent,
    GridsComponent,
    InputgroupsComponent,
    FormhorizontalComponent,
    FormactionsComponent,
    FormrowsepComponent,
    FormstripedComponent,
    FormdetailComponent,
    EquipmentToggleComponent,
    FormWorkshopComponent,
    FormParticipantComponent,
    FormListEquipmentComponent,
    FormEquipmentComponent,
    //TreeComponent,
    FormListWorkshopComponent,
    FormListParticipantComponent 
  ],
  //bootstrap:    [ TreeComponent,FormWorkshopComponent,FormListWorkshopComponent,EquipmentToggleComponent ]
  bootstrap:    [ FormWorkshopComponent,FormListWorkshopComponent,EquipmentToggleComponent ]
  //bootstrap:    [FormWorkshopComponent]
})
export class FormModule { }

