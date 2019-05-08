import { Routes } from '@angular/router';

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
import { FormWorkshopComponent } from './form-workshop/workshop.component';
import { FormListWorkshopComponent } from './form-list-workshop/form-list-workshop.component'

import { FormParticipantComponent } from './form-participant/participant.component';
import { FormListParticipantComponent } from './form-list-participant/form-list-participant.component'

import { FormEquipmentComponent } from './form-equipment/equipment.component';
import { FormListEquipmentComponent } from './form-list-equipment/form-list-equipment.component'

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'formbasic',
        component: FormBasicComponent,
        data: {
          title: 'Basic Form',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Basic Form' }
          ]
        }
      },
      {
        path: 'formparticipant',
        component: FormParticipantComponent,
        data: {
          title: 'Maintainer Participant',
          urls: [
            { title: 'participant', url: '/dashboard' },
            { title: 'Maintainer Participant' }
          ]
        }
      },
      {
        path: 'formlistparticipant',
        component: FormListParticipantComponent,
        data: {
          title: 'List Participant',
          urls: [
            { title: 'participant', url: '/dashboard' },
            { title: 'List Participant' }
          ]
        }
      },
      {
        path: 'formequipment',
        component: FormEquipmentComponent,
        data: {
          title: 'Maintainer Equipment',
          urls: [
            { title: 'participant', url: '/dashboard' },
            { title: 'Maintainer Participant' }
          ]
        }
      },
      {
        path: 'formlistequipment',
        component: FormListEquipmentComponent,
        data: {
          title: 'List Equipment',
          urls: [
            { title: 'participant', url: '/dashboard' },
            { title: 'List Participant' }
          ]
        }
      },
      {
        path: 'formworkshop',
        component: FormWorkshopComponent,
        data: {
          title: 'Maintainer WorkShop',
          urls: [
            { title: 'WorkShop', url: '/dashboard' },
            { title: 'Maintainer WorkShop' }
          ]
        }
      },
      {
        path: 'formlistworkshop',
        component: FormListWorkshopComponent,
        data: {
          title: 'List WorkShop',
          urls: [
            { title: 'WorkShop', url: '/dashboard' },
            { title: 'List WorkShop' }
          ]
        }
      },
      {
        path: 'formvalidation',
        component: FormvalComponent,
        data: {
          title: 'Form Validation Page',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Form Validation Page' }
          ]
        }
      },
      {
        path: 'forminputs',
        component: ForminputsComponent,
        data: {
          title: 'Form Inputs',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Form Inputs' }
          ]
        }
      },
      {
        path: 'inputgroups',
        component: InputgroupsComponent,
        data: {
          title: 'Input Groups',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Input Groups' }
          ]
        }
      },
      {
        path: 'inputgrid',
        component: GridsComponent,
        data: {
          title: 'Input Grids',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Input Grids' }
          ]
        }
      },
      {
        path: 'checkboxandradio',
        component: CheckradioComponent,
        data: {
          title: 'Checkbox & Radio',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Checkbox & Radio' }
          ]
        }
      },
      {
        path: 'formhorizontal',
        component: FormhorizontalComponent,
        data: {
          title: 'Horizontal Forms',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Horizontal Forms' }
          ]
        }
      },
      {
        path: 'formactions',
        component: FormactionsComponent,
        data: {
          title: 'Form Actions',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Form Actions' }
          ]
        }
      },
      {
        path: 'formrowseparator',
        component: FormrowsepComponent,
        data: {
          title: 'Row Separator Forms',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Row Separator Forms' }
          ]
        }
      },
      {
        path: 'formstripedrows',
        component: FormstripedComponent,
        data: {
          title: 'Striped Rows',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Striped Rows' }
          ]
        }
      },
      {
        path: 'formdetail',
        component: FormdetailComponent,
        data: {
          title: 'Detail Forms',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Detail Forms' }
          ]
        }
      }
    ]
  }
];
