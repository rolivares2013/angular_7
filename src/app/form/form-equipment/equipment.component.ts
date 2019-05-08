import { Component,OnInit} from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';
import { Participant } from '../models/participants';
import { Equipment } from '../models/equipments';
import { Project } from '../models/projects';
import { Statuscode } from '../models/statuscodes';
import { Typemachine } from '../models/typemachines';
import { Participant_has_workshop } from '../models/participant_has_workshop';
import { Workshop_has_equipments } from '../models/workshop_has_equipments';
import { WorkshopService } from '../services/workshop.service';
import {Globals} from '../../globals/globals'
import { stringify } from '@angular/compiler/src/util';
import { Workshop } from '../models/workshop';
import { EquipmentsCruds } from '../models/equipmentsCrud';

import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

import {Router, ActivatedRoute, Params} from '@angular/router';
import { EquipmentCrud } from 'src/app/component/models/equipmentCrud';



const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';


@Component({
  selector: 'app-form-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})


//@ViewChild('treeFFS') public treeFFS;

// const URL = '/api/';


export class FormEquipmentComponent {

  formEquipment: FormGroup;
  private clientWS : number;
  private username : string;
  public uploader:FileUploader = new FileUploader({url: URL});

  constructor(private WorkshopService: WorkshopService,public fb: FormBuilder,private activatedRoute: ActivatedRoute,private router: Router,private globals: Globals) {

    this.clientWS = globals.client;
    this.username = globals.username;

    this.formEquipment = this.fb.group({
      functionalLocation: ['', [Validators.required]],
      functionalLocationDescription: ['', [Validators.required]],
      idTagNumber: ['', [Validators.required]],
      type: ['', [Validators.required]],
      centerCost: ['', [Validators.required]],
      father: ['', [Validators.required]],
      statuscode: ['', [Validators.required]],
      typemachine: ['', [Validators.required]],
      productionUnitHour: ['', [Validators.required]],
      productionPeriod: ['', [Validators.required]],
      productionUnit: ['', [Validators.required]],
      hoursOfOperation: ['', [Validators.required]],
      downtimeCalculations: ['', [Validators.required]],
      equipmentRuntime: ['', [Validators.required]],
      criticality: ['', [Validators.required]],
      criticalitySec:['', [Validators.required]],
      functionalLocationb: ['', [Validators.required]],

    });

    //this.formWorkshop = this.getForm();
  }



  participants: any;
  equipments: Equipment[];

  equipmentsGF : Equipment[];
  equipmentsF : Equipment[];


  projects: Project[];
  workshopid: Workshop[];
  message: number;

  statuscodes: Statuscode[];
  typemachines: Typemachine[];

  eqpCreated: number;
  equipmentCruds = new EquipmentsCruds() ;
  equipmentCrudsList : EquipmentCrud[];
  workshop1 = new Workshop() ;
  participant_has_workshopCt = new Participant_has_workshop();
  workshop_has_equipmentsCt = new Workshop_has_equipments();

  settings = {
    selectMode: 'multi',
    actions:false,
    columns: {
      run: {
        title: 'RUN',
      },
      name: {
        title: 'NAME',
      },
      email: {
        title: 'EMAIL',
      },
    },
  };

    
  settingsEqp = {
    selectMode: 'multi',
    actions:false,
    columns: {
      functionalLocation: {
        title: 'FUNLOC',
      },
      functionalLocationsDescription: {
        title: 'FUNLOCDES',
      },
      centerCost: {
        title: 'CENTCOST',
      },
    },
  };

  dataParticipantsOriginal = [];
  dataParticipantsTmp = [];
  dataEqpSelected = [];
  equipmentTMP = [];

  dataEquipmentsOriginal = [];
  dataEquipmentsTmp = [];

  data =[]; 

  dataGrandFather  =  new Array();
  dataFather =  new Array();

  dataEqp=[]; 
  dataTraspaso =[]; 
  dataTmp =[]; 
  dataTmpPart =[];
  //dataTree :TreeModel;
  dataEqpTmp =[]; 


  dataEqpGroup = []; 
  dataEqpGroupTotal = [];
  datafoun = '';
  EquipmentParam = '';

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.EquipmentParam = params['equipment'];
    });

    //  this.clientWS  = 1
    this.getProjectsxCli(1);
  
    if ( this.EquipmentParam == undefined) {
      this.getParticipants ();
      this.getEquipmentGroup();
      this.getStatusCodes ();
      this.getTypemachines ();
      this.getEquipmentsAll ();
    
      this.dataParticipantsOriginal = this.participants;

    } else {
      // se deben cargar los datos para posible edición 
      console.log('this.WorkshopParam');
      console.log(this.EquipmentParam);

      this.getEquipmentsAll ();
      this.getStatusCodes ();
      this.getTypemachines ();
      //this.getEquipmentGroupWHS();
      this.getEquipmentId(parseInt(this.EquipmentParam));

//      this.getEquipmentsSelected(parseInt(this.EquipmentParam));
      
    }

  }


  getEquipmentId(id:number) {
  
    return this.WorkshopService.getEquipmentId(id)
             .subscribe(
               equipments => {

                this.formEquipment.setValue(
                  {

                    functionalLocation:equipments.functionalLocation,
                    functionalLocationDescription: equipments.functionalLocationsDescription,
                    idTagNumber: equipments.idTagNumber,
                    type: equipments.type,
                    centerCost:equipments.centerCost,
                    father: equipments.father,
                    statuscode: equipments.StatusCodeId,
                    typemachine:equipments.TypeMachineId,

                    productionUnitHour:1,
                    productionPeriod: 1,
                    productionUnit: 1,
                    hoursOfOperation: 1,
                    downtimeCalculations: 1,
                    equipmentRuntime: 1,
                    criticality: 1,
                    criticalitySec:1,
                    functionalLocationb: 1

                  }
                )
              }
              );   
   }

   getEquipmentsSelected(id:number) {
    return this.WorkshopService.getEquipmentsSelected(id.toString())
             .subscribe(
               result => {
                this.dataTmp = $.parseJSON(JSON.stringify(result));
                console.log('result');
                console.log(result);
                console.log(this.dataTmp);
                
              
                let strfuncLocProject = '';
                let strfuncLocEqp = '';
                let strfuncLocComponent = '';

                this.dataEqpSelected = [];
                this.equipmentTMP = this.dataTmp;


                for( var i = 0; i < this.dataTmp.length; i++){ 
                  this.datafoun = this.dataTmp[i].functionalLocation;
                  strfuncLocProject = this.datafoun.split('-',3)[0];
                  strfuncLocEqp = this.datafoun.split('-',3)[1];
                  strfuncLocComponent = this.datafoun.split('-',3)[2];
  
                  if (strfuncLocProject != undefined && strfuncLocEqp != undefined && strfuncLocComponent == undefined) 
                  {
                    this.dataEqpSelected.push(this.dataTmp[i]);
                  }  

                }


                console.log('equipments ANTES: ');
                console.log(this.equipments);
             //   this.equipments = [];

               /// this.getEquipmentGroup();

             //  this.getEquipmentGroupWHS();
                
                console.log('equipments DESPUES: ');
                console.log(this.equipments);

                this.dataEqp = this.dataEqpSelected;
                this.dataEquipmentsTmp =  this.equipments ;
                
                  /// Eliminando del Origen
                  for( var i = 0; i < this.dataEquipmentsTmp.length; i++){ 
                    for( var j = 0; j < this.dataEqp.length; j++){ 
                        if ( this.dataEquipmentsTmp[i].id === this.dataEqp[j].id) {
                            // eliminar data 
                            this.dataEquipmentsTmp.splice(i,1);
                        } 
                      } 
                  }  
                  this.equipments = [];
                  this.equipments = $.parseJSON(JSON.stringify(this.dataEquipmentsTmp));
                  ///

               }
              );
   }

   getParticipantsSelected(id:number) {
    return this.WorkshopService.getParticipantsSelected(id.toString())
             .subscribe(
               result => {
                this.dataTmp = $.parseJSON(JSON.stringify(result));
                // cargar participantes asociasdos al workshop
                for( var j = 0; j < this.dataTmp.length; j++){                  
                   this.data.push(this.dataTmp[j].Participant);
                } 
                this.data = $.parseJSON(JSON.stringify(this.data)); 
                // Sacar de participantes los ya seleccionados 
                this.dataTmp = $.parseJSON(JSON.stringify(this.participants));
                for( var i = 0; i < this.dataTmp.length; i++){ 
                  for( var j = 0; j < this.data.length; j++){ 
                      if ( this.dataTmp[i].id === this.data[j].id) { 
                        this.dataTmp.splice(i, 1);  
                      } 
                    } 
                }  
                this.participants = this.dataTmp;
               }
              );
   }


 getParticipants() {
  return this.WorkshopService.getParticipants()
             .subscribe(
               participants => {
                console.log(participants);
                this.participants = participants
               }
              );
}


getStatusCodes() {
  return this.WorkshopService.getStatusCodes()
             .subscribe(
               statuscodes => {
                console.log(statuscodes);
                this.statuscodes = statuscodes
               }
              );
}

getTypemachines() {
  return this.WorkshopService.getTypemachines()
             .subscribe(
               typemachines => {
                console.log(typemachines);
                this.typemachines = typemachines
               }
              );
}


getProjectsxCli(idCli : number) {
  return this.WorkshopService.getProjectsXCli(idCli)
             .subscribe(
               projects => {
                console.log('projects');
                console.log(projects);
                this.projects = projects
               }
              );
}

getEquipmentGroupWHS(){

  return this.WorkshopService.getEquipmentGroup()
             .subscribe(
               equipments => {
                
               
               let strfuncLocProject : string;
               let strfuncLocEqp : string;
               let strfuncLocComponent : string;

               this.dataEqpTmp = equipments;
               this.dataEqpGroup = equipments;

               

               //this.dataEqpGroupTotal = [];
               //this.dataEqpGroup = [];
                let j : number ;
                let strPartComponent : string;
                j=0;
                strPartComponent = '';
        
                for( var i = 1; i < this.dataEqpTmp.length; i++){ 

                  this.datafoun = this.dataEqpTmp[i].functionalLocation;
                  console.log('i :' + i);
       
                 
                  strfuncLocProject = this.datafoun.split('-',3)[0];
                  strfuncLocEqp = this.datafoun.split('-',3)[1];
                  strfuncLocComponent = this.datafoun.split('-',3)[2];


                  console.log('strfuncLocProject :'  + strfuncLocProject);

          
                  if (strfuncLocProject != undefined && strfuncLocEqp != undefined && strfuncLocComponent == undefined) 
                  {

                    console.log('dataEqpTmp : i ');
                    console.log(i);
  
                    console.log('dataEqpTmp : JJJ ');
                    console.log(j);


                          
                    console.log('dataEqpGroup :');
                    console.log(this.dataEqpGroup);

                    
                    console.log('dataEqpTmp :');
                    console.log(this.dataEqpTmp);
  
  

                    this.dataEqpGroup[j].id = this.dataEqpTmp[i].id;
                    this.dataEqpGroup[j].functionalLocation = strfuncLocProject + '-' + strfuncLocEqp;
                    this.dataEqpGroup[j].functionalLocationsDescription = this.dataEqpTmp[i].functionalLocationsDescription;
                    this.dataEqpGroup[j].idTagNumber = this.dataEqpTmp[i].idTagNumber;
                    this.dataEqpGroup[j].centerCost = this.dataEqpTmp[i].centerCost;

  
                    if (strPartComponent != '') { // si entra aquí quiere decir que ya paso por un equipo y la variable strPartComponent, ya cuenta con todos los componentes 
                      this.dataEqpGroup[j].functionalLocation =  this.dataEqpGroup[j].functionalLocation ;//+ strPartComponent
                      strPartComponent = '';
                      this.dataEqpGroupTotal.push(this.dataEqpGroup[j]);
                      console.log('dataEqpGroupTotal :' + i);
                      console.log(this.dataEqpGroupTotal);
                      j++;
                    }
                  } else {
                    strPartComponent = strPartComponent + ' [' + strfuncLocComponent + '] ';
                  }
                } 
                // ultimo registro
                if (strPartComponent != '') { // si entra aquí quiere decir que ya paso por un equipo y la variable strPartComponent, ya cuenta con todos los componentes 
                  this.dataEqpGroup[j].functionalLocation = this.dataEqpGroup[j].functionalLocation ;//+ strPartComponent
                  this.dataEqpGroupTotal.push(this.dataEqpGroup[j]);
                
                }


                this.equipments = this.dataEqpGroupTotal; //equipments
               }
              );

}

getEquipmentGroup() {
  return this.WorkshopService.getEquipmentGroup()
             .subscribe(
               equipments => {
                
               
               let strfuncLocProject : string;
               let strfuncLocEqp : string;
               let strfuncLocComponent : string;

               this.dataEqpTmp = equipments;
               this.dataEqpGroup = equipments;

                
                let j : number ;
                let strPartComponent : string;
                j=0;
                strPartComponent = '';
                console.log('this.dataEqpTmp.length:' + this.dataEqpTmp.length);
                for( var i = 1; i < this.dataEqpTmp.length; i++){ 

                  this.datafoun = this.dataEqpTmp[i].functionalLocation;
                  console.log('i :' + i);
       

                  strfuncLocProject = this.datafoun.split('-',3)[0];
                  strfuncLocEqp = this.datafoun.split('-',3)[1];
                  strfuncLocComponent = this.datafoun.split('-',3)[2];


                  if (strfuncLocProject != undefined && strfuncLocEqp != undefined && strfuncLocComponent == undefined) 
                  {
                    this.dataEqpGroup[j].id = this.dataEqpTmp[i].id;
                    this.dataEqpGroup[j].functionalLocation = strfuncLocProject + '-' + strfuncLocEqp;
                    this.dataEqpGroup[j].functionalLocationsDescription = this.dataEqpTmp[i].functionalLocationsDescription;
                    this.dataEqpGroup[j].idTagNumber = this.dataEqpTmp[i].idTagNumber;
                    this.dataEqpGroup[j].centerCost = this.dataEqpTmp[i].centerCost;
                    this.dataEqpGroup[j].father =  this.dataEqpTmp[i].father;
  
                    if (strPartComponent != '') { // si entra aquí quiere decir que ya paso por un equipo y la variable strPartComponent, ya cuenta con todos los componentes 
                      this.dataEqpGroup[j].functionalLocation =  this.dataEqpGroup[j].functionalLocation + strPartComponent
                      strPartComponent = '';
                      this.dataEqpGroupTotal.push(this.dataEqpGroup[j]);
                      j++;
                    }
                  } else {
                    strPartComponent = strPartComponent + ' [' + strfuncLocComponent + '] ';
                  }
                } 
                // ultimo registro
                if (strPartComponent != '') { // si entra aquí quiere decir que ya paso por un equipo y la variable strPartComponent, ya cuenta con todos los componentes 
                  this.dataEqpGroup[j].functionalLocation = this.dataEqpGroup[j].functionalLocation + strPartComponent
                  this.dataEqpGroupTotal.push(this.dataEqpGroup[j]);
                }
                this.equipments = this.dataEqpGroupTotal; //equipments
                console.log('equipments this.equipments');
                console.log(this.equipments);

               }
              );
}

  rowsSelected = "" ;
  rowsSelected1 = "";
  rowsSelectedEqpLeft = "";
  rowsSelectedEqpRight = "";

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }


  public onUserRowSelectEqpLeft(event) {
    this.rowsSelectedEqpLeft  = event.selected;
  }

  public onUserRowSelectEqpRight(event) {
    this.rowsSelectedEqpRight  = event.selected;
  }

  public onUserRowSelect(event) {
    this.rowsSelected  = event.selected;
  }

  public onUserRowSelect1(event) {
    this.rowsSelected1 = event.selected; 
  }

  public cargarEqp() {

    // Elimninar los participantes del lado izquierdo 
    this.dataEquipmentsTmp = this.equipments;

    ///Agregar en Destino los nuevos
      this.dataTmp = $.parseJSON(JSON.stringify(this.rowsSelectedEqpLeft));
      var marca = 0;
        for( var i = 0; i < this.dataTmp.length; i++){ 
          for( var j = 0; j < this.dataEqp.length; j++){ 
              if ( this.dataTmp[i].id === this.dataEqp[j].id) { marca = 1;} 
            } 
            if ( marca  === 0) { // Agregar el registro
              this.dataEqp.push(this.dataTmp[i]);
              this.dataEqp = $.parseJSON(JSON.stringify(this.dataEqp));
            } else {marca = 0}
            
        }  
    /// 

    /// Eliminando del Origen
    for( var i = 0; i < this.dataEqp.length; i++){ 
      for( var j = 0; j < this.dataEquipmentsTmp.length; j++){ 
          if ( this.dataEquipmentsTmp[j].id === this.dataEqp[i].id) {
              // eliminar data 
              this.dataEquipmentsTmp.splice(j,1);
          } 
        } 
    }  
    this.equipments = [];
    this.equipments = $.parseJSON(JSON.stringify(this.dataEquipmentsTmp));
    ///
  }

  public cargar() {

    // Elimninar los participantes del lado izquierdo 
    this.dataParticipantsTmp = this.participants;

    ///Agregar en Destino los nuevos
      this.dataTmp = $.parseJSON(JSON.stringify(this.rowsSelected));
      var marca = 0;
        for( var i = 0; i < this.dataTmp.length; i++){ 
          for( var j = 0; j < this.data.length; j++){ 
              if ( this.dataTmp[i].id === this.data[j].id) { marca = 1;} 
            } 
            if ( marca  === 0) { // Agregar el registro
              this.data.push(this.dataTmp[i]);
              this.data = $.parseJSON(JSON.stringify(this.data));
            } else {marca = 0}
            
        }  
    /// 

    /// Eliminando del Origen
    for( var i = 0; i < this.data.length; i++){ 
      for( var j = 0; j < this.dataParticipantsTmp.length; j++){ 
          if ( this.dataParticipantsTmp[j].id === this.data[i].id) {
              // eliminar data 
              this.dataParticipantsTmp.splice(j,1);
          } 
        } 
    }  
    this.participants = [];
    this.participants = $.parseJSON(JSON.stringify(this.dataParticipantsTmp));
    ///
  }

  public sacar() {

    this.dataTmp = this.data;
    this.dataTraspaso =  $.parseJSON(JSON.stringify(this.rowsSelected1));

   ///Agregar en Destino los nuevos
   var marca = 0;
     for( var i = 0; i < this.dataTraspaso.length; i++){ 
       for( var j = 0; j < this.participants.length; j++){ 
           if ( this.dataTraspaso[i].id === this.participants[j].id) { marca = 1;} 
         } 
         if ( marca  === 0) { // Agregar el registro
           this.participants.push(this.dataTraspaso[i]);
           this.participants = $.parseJSON(JSON.stringify(this.participants));
         } else {marca = 0}
         
     }  
 /// 

    // Eliminando del Destino
    for( var i = 0; i < this.dataTraspaso.length; i++){ 
       for( var j = 0; j < this.dataTmp.length; j++){ 
           if ( this.dataTmp[j].id === this.dataTraspaso[i].id) {
               // eliminar data 
               this.dataTmp.splice(j,1);
           } 
         } 
     }  
   this.data=[];
   this.data = this.dataTmp;
   this.data = $.parseJSON(JSON.stringify(this.dataTmp))
  }



  public sacarEqp() {

     this.dataTmp = this.dataEqp;
     this.dataTraspaso =  $.parseJSON(JSON.stringify(this.rowsSelectedEqpRight));

    ///Agregar en Destino los nuevos
    var marca = 0;
      for( var i = 0; i < this.dataTraspaso.length; i++){ 
        for( var j = 0; j < this.equipments.length; j++){ 
            if ( this.dataTraspaso[i].id === this.equipments[j].id) { marca = 1;} 
          } 
          if ( marca  === 0) { // Agregar el registro
            this.equipments.push(this.dataTraspaso[i]);
            this.equipments = $.parseJSON(JSON.stringify(this.equipments));
          } else {marca = 0}
          
      }  
  /// 

     // Eliminando del Destino
     for( var i = 0; i < this.dataTraspaso.length; i++){ 
        for( var j = 0; j < this.dataTmp.length; j++){ 
            if ( this.dataTmp[j].id === this.dataTraspaso[i].id) {
                // eliminar data 
                this.dataTmp.splice(j,1);
            } 
          } 
      }  
    this.dataEqp=[];
    this.dataEqp = this.dataTmp;
    this.dataEqp = $.parseJSON(JSON.stringify(this.dataTmp))
   }

   getDataGrandFather(idGrandFarher:number[]){
     return this.WorkshopService.getDataGrandFather(idGrandFarher)
     .subscribe(
      equipments => {
        this.equipmentsGF = equipments

                    // Insert GrandFather
                    for( var i = 0; i < this.equipmentsGF.length; i++){

                      this.workshop_has_equipmentsCt.EquipmentId = this.equipmentsGF[i].id;
                      this.workshop_has_equipmentsCt.WorkshopId =  this.eqpCreated;
        
                      this.WorkshopService.addEquipmentWshop( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                      .subscribe(result => {
                        this.message = result.EquipmentId
                        console.log("this.this.equipmentsGF :" + this.message);
        
                      }); 
                     }
        

       }
      );
   }


   
   getDataFather(idFarher:number[]){

    return this.WorkshopService.getDataFather(idFarher)
    .subscribe(
     equipments => {
       console.log(equipments);
       this.equipmentsF = equipments

          // Insert Hijops
          for( var i = 0; i < this.equipmentsF.length; i++){

            this.workshop_has_equipmentsCt.EquipmentId = this.equipmentsF[i].id;
            this.workshop_has_equipmentsCt.WorkshopId =  this.eqpCreated;

            this.WorkshopService.addEquipmentWshop( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
            .subscribe(result => {
              this.message = result.EquipmentId
              console.log("this.this.getDataFather :" + this.message);

            }); 
          }


      }
     );
  }

  getEquipmentsAll() {
    return this.WorkshopService.getEquipmentsAll()
               .subscribe(
                equipmentCrudsList => {
                  console.log('SON.stringify(this.workshop_has_equipmentsCt): ' + JSON.stringify(this.equipmentCrudsList))
                  this.equipmentCrudsList = equipmentCrudsList
                 }
           );
  }
   
  saveEquipment(): void {
      // Validar que se encuentren todos los datos necesarios
      // Grabar en las tablas workshop ;
      // Equipos Workshop_has_Equipments;
      // Participantes Participant_has_Workshop;

/*       this.workshop.nameWorkshop = this.formEquipment.get('nameWorkshop').value;
      this.workshop.ProjectId = this.formEquipment.get('nameProject').value;
      this.workshop.Projects_idProjects =  this.formEquipment.get('nameProject').value;
      this.workshop.dateRealization = this.formEquipment.get('dateBegin').value;
      this.workshop.dateEnd =  this.formEquipment.get('dateEnd').value;
      this.workshop.comentary =  this.formEquipment.get('comentary').value; */


     
/*       father: ['', [Validators.required]],
      statuscode: ['', [Validators.required]],
      typemachine: ['', [Validators.required]],
      productionUnitHour: ['', [Validators.required]],
      productionPeriod: ['', [Validators.required]],
      productionUnit: ['', [Validators.required]],
      hoursOfOperation: ['', [Validators.required]],
      downtimeCalculations: ['', [Validators.required]],
      equipmentRuntime: ['', [Validators.required]],
      criticality: ['', [Validators.required]],
      criticalitySec:['', [Validators.required]],
      functionalLocationb: ['', [Validators.required]], */

      this.equipmentCruds.functionalLocation = this.formEquipment.get('functionalLocation').value;
      this.equipmentCruds.functionalLocationsDescription = this.formEquipment.get('functionalLocationDescription').value;
      this.equipmentCruds.idTagNumber =  this.formEquipment.get('idTagNumber').value;
      this.equipmentCruds.type = this.formEquipment.get('type').value;
      this.equipmentCruds.centerCost =  this.formEquipment.get('centerCost').value;
      this.equipmentCruds.photo = 'photo';
      this.equipmentCruds.video = 'video';
      this.equipmentCruds.planes =  'planes';

      this.equipmentCruds.StatusCodeId =  this.formEquipment.get('statuscode').value;
      this.equipmentCruds.TypeMachineId =  this.formEquipment.get('typemachine').value;
      this.equipmentCruds.father = this.formEquipment.get('father').value; 
      

      if ( this.EquipmentParam == undefined) {
      ///Agregar en Workshop nuevo
      
      
  
      this.WorkshopService.addEquipment( $.parseJSON(JSON.stringify(this.equipmentCruds)))
        .subscribe(result => {
          this.message = result.id;
//this.equipmentCruds = result.id;
          
          ///Agregar en Destino los nuevos
          this.dataTmp = $.parseJSON(JSON.stringify(this.data));

          console.log("this.this.message :" + this.message);
        });
      ////

      } else {
        // los datos ya existen y se deben actualizar solamente
              
              this.equipmentCruds.id = parseInt(this.EquipmentParam)
              this.WorkshopService.updateEquipment( $.parseJSON(JSON.stringify(this.equipmentCruds)))
              .subscribe(result => {
                this.message = result.id
                console.log("this.this.WorkshopService :" + this.message);
              }); 


      } 

      this.router.navigateByUrl('forms/formlistequipment');

  }

}


