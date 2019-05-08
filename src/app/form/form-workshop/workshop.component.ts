import { Component,OnInit} from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';
import { Participant } from '../models/participants';
import { Equipment } from '../models/equipments';
import { Project } from '../models/projects';
import { Participant_has_workshop } from '../models/participant_has_workshop';
import { Workshop_has_equipments } from '../models/workshop_has_equipments';
import { WorkshopService } from '../services/workshop.service';
import {Globals} from '../../globals/globals'
import { stringify } from '@angular/compiler/src/util';
import { Workshop } from '../models/workshop';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-form-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})


//@ViewChild('treeFFS') public treeFFS;


export class FormWorkshopComponent {

  formWorkshop: FormGroup;
  private clientWS : number;
  private username : string;

  constructor(private WorkshopService: WorkshopService,public fb: FormBuilder,private activatedRoute: ActivatedRoute,private router: Router,private globals: Globals) {

    this.clientWS = globals.client;
    this.username = globals.username;

    this.formWorkshop = this.fb.group({
      nameWorkshop: ['', [Validators.required]],
      nameProject: ['', [Validators.required]],
      dateBegin: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]],
      comentary: ['', [Validators.required]],
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

  workshopCreated: number;
  workshop = new Workshop() ;
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
  WorkshopParam = '';

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.WorkshopParam = params['workshop'];
    });

    //  this.clientWS  = 1
    this.getProjectsxCli(1);
  
    if ( this.WorkshopParam == undefined) {
      this.getParticipants ();
      this.getEquipmentGroup();
    
      this.dataParticipantsOriginal = this.participants;

    } else {
      // se deben cargar los datos para posible edición 
      console.log('this.WorkshopParam');
      console.log(this.WorkshopParam);

      this.getParticipants ();
      this.getEquipmentGroupWHS();
      this.getworkshopsId(parseInt(this.WorkshopParam));
      this.getParticipantsSelected(parseInt(this.WorkshopParam));
      this.getEquipmentsSelected(parseInt(this.WorkshopParam));
      
    }

  }


  getworkshopsId(id:number) {
  
    return this.WorkshopService.getWorkshopsId(id)
             .subscribe(
               workshops => {
                console.log('TRAJO LA DATA');
                console.log(workshops);

                this.formWorkshop.setValue(
                  {
                    nameWorkshop:workshops.nameWorkshop,
                    nameProject:workshops.ProjectId,
                    comentary:workshops.comentary,
                    dateBegin:workshops.dateRealization,
                    dateEnd : workshops.dateEnd
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
                      this.workshop_has_equipmentsCt.WorkshopId =  this.workshopCreated;
        
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
            this.workshop_has_equipmentsCt.WorkshopId =  this.workshopCreated;

            this.WorkshopService.addEquipmentWshop( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
            .subscribe(result => {
              this.message = result.EquipmentId
              console.log("this.this.getDataFather :" + this.message);

            }); 
          }


      }
     );
  }
   
  saveWorkshop(): void {
      // Validar que se encuentren todos los datos necesarios
      // Grabar en las tablas workshop ;
      // Equipos Workshop_has_Equipments;
      // Participantes Participant_has_Workshop;

      this.workshop.nameWorkshop = this.formWorkshop.get('nameWorkshop').value;
      this.workshop.ProjectId = this.formWorkshop.get('nameProject').value;
      this.workshop.Projects_idProjects =  this.formWorkshop.get('nameProject').value;
      this.workshop.dateRealization = this.formWorkshop.get('dateBegin').value;
      this.workshop.dateEnd =  this.formWorkshop.get('dateEnd').value;
      this.workshop.comentary =  this.formWorkshop.get('comentary').value;

      if ( this.WorkshopParam == undefined) {
      ///Agregar en Workshop nuevo
      this.WorkshopService.addWorkshop( $.parseJSON(JSON.stringify(this.workshop)))
        .subscribe(result => {
          this.message = result.id;
          this.workshopCreated = result.id;
          
          ///Agregar en Destino los nuevos
          this.dataTmp = $.parseJSON(JSON.stringify(this.data));
            for( var i = 0; i < this.dataTmp.length; i++){ 
              this.participant_has_workshopCt.ParticipantId = this.dataTmp[i].id;
              this.participant_has_workshopCt.WorkshopId =  this.workshopCreated;
              this.participant_has_workshopCt.assitance = null;

              this.WorkshopService.addParticipantWshop( $.parseJSON(JSON.stringify(this.participant_has_workshopCt)))
              .subscribe(result => {
                this.message = result.ParticipantId;
                console.log("this.this.Competitor_idCompetitor :" + this.message);
              });

            }   
          /// 

            ///Agregar en Destino los Equipos
            this.dataEqpTmp = $.parseJSON(JSON.stringify(this.dataEqp));
            console.log('this.dataEqpTmp Agregar en Destino los Equipos ');
            console.log(this.dataEqpTmp );

            // Buscar GrandFather de cada equipo
              // Obtenemos los GrandFather
              for( var i = 0; i < this.dataEqpTmp.length; i++){ 
                this.dataGrandFather.push(this.dataEqpTmp[i].father);
                this.dataFather.push(this.dataEqpTmp[i].id);
              }

              this.getDataGrandFather(this.dataGrandFather);
            

              console.log("this.dataEqpTmp.length:" + this.dataEqpTmp.length);
              for( var i = 0; i < this.dataEqpTmp.length; i++){ 
                console.log("tthis.dataEqpTmp[i].id:" + this.dataEqpTmp[i].id);
                this.workshop_has_equipmentsCt.EquipmentId = this.dataEqpTmp[i].id;
                this.workshop_has_equipmentsCt.WorkshopId =  this.workshopCreated;

                this.WorkshopService.addEquipmentWshop( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                .subscribe(result => {
                  this.message = result.EquipmentId
                  console.log("this.this.Equipments_idEquipments :" + this.message);
                  
                  this.workshop_has_equipmentsCt.EquipmentId = result.EquipmentId;
                  this.workshop_has_equipmentsCt.WorkshopId =  this.workshopCreated;
                  console.log("this.workshop_has_equipmentsCt :");
                  
                  console.log(this.workshop_has_equipmentsCt);

                  // AGREGAR STRUCTURA PARA LA CRITICIDAD
                  this.WorkshopService.createCriticity( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                  .subscribe(result => {
                    this.message = result.EquipmentId;
                    console.log("this.this.createCriticity :" + this.message);
                  });

                }); 

              }   
            /// 

          /// Buscar hijos y agregarlos al WorkShop

          this.getDataFather(this.dataFather);


          
          console.log("this.this.message :" + this.message);
        });
      ////

      } else {
        // los datos ya existen y se deben actualizar solamente
              
              this.workshop.id = parseInt(this.WorkshopParam)
              this.WorkshopService.updateWorkshop( $.parseJSON(JSON.stringify(this.workshop)))
              .subscribe(result => {
                this.message = result.id
                console.log("this.this.WorkshopService :" + this.message);
              }); 

              //  Elimina todos los participates, para luego agregarlos 
              this.WorkshopService.deleteParticipantWshop(this.WorkshopParam)
              .subscribe(result => {
                this.message = result.ParticipantId;
                              ///Agregar en Destino los nuevos
                              this.dataTmp = $.parseJSON(JSON.stringify(this.data));
                              for( var i = 0; i < this.dataTmp.length; i++){ 
                                this.participant_has_workshopCt.ParticipantId = this.dataTmp[i].id;
                                this.participant_has_workshopCt.WorkshopId =  this.workshop.id 
                                this.participant_has_workshopCt.assitance = null;
            
                                this.WorkshopService.addParticipantWshop( $.parseJSON(JSON.stringify(this.participant_has_workshopCt)))
                                .subscribe(result => {
                                  this.message = result.ParticipantId;
                                  console.log("this.this.addParticipantWshop :" + this.message);
                                });
            
                              }   
                            /// 
                console.log("this.this.deleteParticipantWshop :" + this.message);
              });


              this.WorkshopService.deleteLh_has_clsWshop(this.WorkshopParam)
              .subscribe(result => {
                this.message = result.WorkshopId;
                console.log("this.this.deleteLh_has_clsWshop :" + this.message);
              });

              
                //  Elimina todos los Equipos, para luego agregarlos 
                this.WorkshopService.deleteEquipmentWshop(this.WorkshopParam)
                .subscribe(result => {
                  this.message = result.EquipmentId;

/*                   
                               ///Agregar en Destino los Equipos
                                this.dataEqpTmp = $.parseJSON(JSON.stringify(this.dataEqp));
                                for( var i = 0; i < this.dataEqpTmp.length; i++){ 
                                  this.workshop_has_equipmentsCt.EquipmentId = this.dataEqpTmp[i].id;
                                  this.workshop_has_equipmentsCt.WorkshopId =  parseInt(this.WorkshopParam);
                                  this.WorkshopService.addEquipmentWshop( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                                  .subscribe(result => {
                                    this.message = result.EquipmentId
                                    console.log("this.this.Equipments_idEquipments :" + this.message);
                                    this.workshop_has_equipmentsCt.EquipmentId = result.EquipmentId;
                                    this.workshop_has_equipmentsCt.WorkshopId =  result.WorkshopId;  

                                      // AGREGAR STRUCTURA PARA LA CRITICIDAD

                                      this.WorkshopService.createCriticity( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                                      .subscribe(result => {
                                        this.message = result.EquipmentId;
                                        console.log("this.this.createCriticity :" + this.message);
                                      });



                                  }); 

                                }   
                              ///  */



                              /////
            ///Agregar en Destino los Equipos
            this.dataEqpTmp = $.parseJSON(JSON.stringify(this.dataEqp));
            console.log('this.dataEqpTmp Agregar en Destino los Equipos ');
            console.log(this.dataEqpTmp );

            // Buscar GrandFather de cada equipo
              // Obtenemos los GrandFather
              for( var i = 0; i < this.dataEqpTmp.length; i++){ 
                this.dataGrandFather.push(this.dataEqpTmp[i].father);
                this.dataFather.push(this.dataEqpTmp[i].id);
              }

              this.getDataGrandFather(this.dataGrandFather);
            

              console.log("this.dataEqpTmp.length:" + this.dataEqpTmp.length);
              for( var i = 0; i < this.dataEqpTmp.length; i++){ 
                console.log("tthis.dataEqpTmp[i].id:" + this.dataEqpTmp[i].id);
                this.workshop_has_equipmentsCt.EquipmentId = this.dataEqpTmp[i].id;
                this.workshop_has_equipmentsCt.WorkshopId =  this.workshopCreated;

                this.WorkshopService.addEquipmentWshop( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                .subscribe(result => {
                  this.message = result.EquipmentId
                  console.log("this.this.Equipments_idEquipments :" + this.message);

                  // AGREGAR STRUCTURA PARA LA CRITICIDAD
                  this.WorkshopService.createCriticity( $.parseJSON(JSON.stringify(this.workshop_has_equipmentsCt)))
                  .subscribe(result => {
                    this.message = result.EquipmentId;
                    console.log("this.this.createCriticity :" + this.message);
                  });

                }); 

              }   
            /// 

          /// Buscar hijos y agregarlos al WorkShop

          this.getDataFather(this.dataFather);




                              /////


                              
                  console.log("this.this.deleteEquipmentWshop :" + this.message);
                });
      } 

      this.router.navigateByUrl('forms/formlistworkshop');

  }

}


