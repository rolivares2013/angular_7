import { Component } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { style, AnimationQueryMetadata } from '@angular/animations';
//import {  TreeModel } from '../../component/tree/dep/index';
import { WorkshopService } from '../../form/services/workshop.service';
import { EquipmentService } from '../services/equipment.service';
import { BusinessinformationsService } from '../services/businessinformations.service';
import * as tableData from './smart-data-table';
import { Workshop } from '../../form/models/workshop';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Globals} from '../../globals/globals'
import { TreeModel,NodeEvent } from 'ng2-tree';
/* import { Lh_has_cl } from 'src/app/form/models/lh_has_cls'; */

import { Lh_hs_cls } from '../models/lh_hs_cls';
import { windowWhen } from 'rxjs/operators';

/* import {WizardState} from 'ng2-archwizard/dist'; */

@Component({
  selector: 'app-ngbd-pagination',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
}) 

//@ViewChild('treeFFS') public treeFFS;

/* @ViewChild(WizardComponent)
public wizard: WizardComponent; */

export class NgbdtabsBasicComponent {

  formEquipment: FormGroup;
  private clientWS : number;
  private username : string;

  public urlPhoto : string ;
  public cantPhot : number ;
  public ArrayCantPhoto =  Array.from(Array(1), (_,x) => x);

  data1 : boolean;
  data2 : boolean;
  data3 : boolean;
  dataLikelihood0: boolean;
  dataLikelihood1: boolean;
  dataLikelihood2: boolean;
  dataLikelihood3: boolean;
  dataLikelihood4: boolean;
  dataLikelihood5: boolean;
  dataLikelihood6: boolean;
  dataLikelihood7: boolean;


  dataReputation0: boolean;
  dataReputation1: boolean;
  dataReputation2: boolean;
  dataReputation3: boolean;
  dataReputation4: boolean;
  dataReputation5: boolean;
  dataReputation6: boolean;
  dataReputation7: boolean;

  dataCommunity0: boolean;
  dataCommunity1: boolean;
  dataCommunity2: boolean;
  dataCommunity3: boolean;
  dataCommunity4: boolean;
  dataCommunity5: boolean;
  dataCommunity6: boolean;
  dataCommunity7: boolean;

  dataLegal0: boolean;
  dataLegal1: boolean;
  dataLegal2: boolean;
  dataLegal3: boolean;
  dataLegal4: boolean;
  dataLegal5: boolean;
  dataLegal6: boolean;
  dataLegal7: boolean;

  dataEnvironment0: boolean;
  dataEnvironment1: boolean;
  dataEnvironment2: boolean;
  dataEnvironment3: boolean;
  dataEnvironment4: boolean;
  dataEnvironment5: boolean;
  dataEnvironment6: boolean;
  dataEnvironment7: boolean;

  dataFinancial0: boolean;
  dataFinancial1: boolean;
  dataFinancial2: boolean;
  dataFinancial3: boolean;
  dataFinancial4: boolean;
  dataFinancial5: boolean;
  dataFinancial6: boolean;
  dataFinancial7: boolean;

  dataHealthfactor0: boolean;
  dataHealthfactor1: boolean;
  dataHealthfactor2: boolean;
  dataHealthfactor3: boolean;
  dataHealthfactor4: boolean;
  dataHealthfactor5: boolean;
  dataHealthfactor6: boolean;
  dataHealthfactor7: boolean;

  flowWizard : any;

  resultCritical : string;
  MatrixCritical = [
    ['High', 'Very High', 'Very High' , 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process'],
    ['Medium', 'High', 'Very High', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process'],
    ['Low', 'Medium', 'High', 'Very High', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process'],
    ['Low', 'Low', 'Medium', 'High', 'Very High', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process'],
    ['Low', 'Low', 'Low', 'Medium', 'High', 'High', 'Very High - Material Risk Evaluate risk management process','Very High - Material Risk Evaluate risk management process', 'Very High - Material Risk Evaluate risk management process'],
  ];

  dataLHL1: boolean;
  dataLHL2: boolean;
  dataLHL3: boolean;
  dataLHL4: boolean;
  dataLHL5: boolean;

  buttonNextStatusHeald : boolean;
  buttonNextStatusEnvir : boolean;
  buttonNextStatusLegal : boolean;
  buttonNextStatusCommu : boolean;
  buttonNextStatusFinan : boolean;
  buttonNextStatusReput : boolean;
  

 constructor(private WorkshopService: WorkshopService,private EquipmentService: EquipmentService,private BusinessinformationsService : BusinessinformationsService,public fb: FormBuilder,private globals: Globals){
  //constructor(private WorkshopService: WorkshopService,public fb: FormBuilder,private globals: Globals){

    this.clientWS = globals.client;
    this.username = globals.username;

    

    this.formEquipment = this.fb.group({
     nameWorkshop: ['', [Validators.required]],
     // nameProject: ['', [Validators.required]],
     // dateBegin: ['', [Validators.required]],
     // dateEnd: ['', [Validators.required]],
      comentary: ['', [Validators.required]],
      nameeqp:  ['', [Validators.required]],
      namecc:  ['', [Validators.required]],
      nametype:  ['', [Validators.required]],
      nametn:  ['', [Validators.required]],
      namefl:  ['', [Validators.required]],
      nameccp:  ['', [Validators.required]],
      nameccr:  ['', [Validators.required]],
      nameccrs:  ['', [Validators.required]],
      namedownloadc:  ['', [Validators.required]],
      nameeqpr:  ['', [Validators.required]],
      namefunloc:  ['', [Validators.required]],
      namehourop:  ['', [Validators.required]],
      nameprodper:  ['', [Validators.required]],
      nameprouni:  ['', [Validators.required]],
      nameprodunihour:  ['', [Validators.required]],
      comentaryCriticality:  ['', [Validators.required]],
      contextCriticality:  ['', [Validators.required]],
      messegeCriticality:  ['', [Validators.required]],
      likelihood:  ['', [Validators.required]],
      LLHL:  ['', [Validators.required]],
      reputation:  ['', [Validators.required]],
      community:  ['', [Validators.required]],
      legal:  ['', [Validators.required]],
      environment:  ['', [Validators.required]],
      financial:  ['', [Validators.required]],
      healthfactor:  ['', [Validators.required]],

    });

  
  }

  model = { options: '2' };

  settings = tableData.settings;
  
  dataTree: {};
  dataTmp =[]; 
  data =[]; 
  participantsws: any;

  dataGrahWS =[];
  dataCriticality : Lh_hs_cls;

  dataTreeTMP:{};

  wsSelected: any;
  idCriticality: any;

  workshops : any;
  equipments : any;
  businessinformations : any ;

  settingTree = {
    cssClasses: {
      expanded: 'fa fa-caret-down',
      collapsed: 'fa fa-caret-right',
      empty: 'fa fa-caret-right disabled',
      leaf: 'fa'
    },
    templates: {
      node: '<i class="mdi mdi-folder" style="margin-right: 4px;"></i>',
      leaf: '<i class="mdi mdi-folder" style="margin-right: 4px;"></i>'
    },
    isCollapsedOnInit: true,
    keepNodesInDOM: true
}

  workshopsFormatDate : Workshop[];

  ngOnInit(): void {
  this.getWorkshopXClient('1');

 // this.getEquipmentXClient('12');
 this.buttonNextStatusHeald = true ;
 this.buttonNextStatusEnvir = true ;
 this.buttonNextStatusLegal = true ;
 this.buttonNextStatusCommu = true ;
 this.buttonNextStatusFinan = true ;
 this.buttonNextStatusReput = true ;

  }  


  


  updateCritcality(){

    this.dataCriticality.TitleContext = this.formEquipment.get('contextCriticality').value;
    this.dataCriticality.DescriptionContext = this.formEquipment.get('messegeCriticality').value;
  
    this.WorkshopService.updateCriticality(this.dataCriticality)
    .subscribe(result => {
      console.log("this.this.WorkshopService :" + result.DescriptionContext);
    }); 
 
  }

  updateLHL(){

    this.dataCriticality.LikelihoodId = this.formEquipment.get('LLHL').value
    console.log(" this.dataCriticality.LikelihoodId " +  this.dataCriticality.LikelihoodId );
    this.WorkshopService.updateCriticality(this.dataCriticality)
   .subscribe(result => {
     console.log("this.this.updateLHL :" + result.DescriptionContext);


   }); 
 
    // Calculo Resultado Criticidad : 


  }

  saveEquipment(){

    
    this.dataCriticality.CriticalityComment = this.formEquipment.get('comentaryCriticality').value
  
    let datamayor = Math.max(this.dataCriticality.FinancialId, this.dataCriticality.HealthfactorId,this.dataCriticality.LegalId,this.dataCriticality.ReputationId,this.dataCriticality.EnvironmentId,this.dataCriticality.CommunityId);
    let dataRes = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][datamayor];


    if (dataRes=="Low") {this.dataCriticality.CriticalityLevelId = 1}
    if (dataRes=="Medium") {this.dataCriticality.CriticalityLevelId = 2}
    if (dataRes=="High") {this.dataCriticality.CriticalityLevelId = 3} else {this.dataCriticality.CriticalityLevelId = 4}
    
    this.WorkshopService.updateCriticality(this.dataCriticality)
   .subscribe(result => {
     console.log("this.this.CriticalityLevelId  saveEquipment:" + result.DescriptionContext);
   }); 
 
 }
  updateFinancial(){

     this.dataCriticality.FinancialId = this.formEquipment.get('financial').value
     this.WorkshopService.updateCriticality(this.dataCriticality)
    .subscribe(result => {
      console.log("this.this.updateFinancial :" + result.DescriptionContext);

      if (this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.FinancialId] == 'Very High - Material Risk Evaluate risk management process'){
        this.flowWizard =  { stepIndex: '8' };
        this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.FinancialId]
       // this.dataCriticality.CriticalityLevelId = 4;
       } else {this.flowWizard =   { stepIndex: '5' };}
  
       this.buttonNextStatusHeald = true ;
       this.buttonNextStatusEnvir = true ;
       this.buttonNextStatusLegal = true ;
       this.buttonNextStatusCommu = true ;
       this.buttonNextStatusFinan = false ;
       this.buttonNextStatusReput = true;


    }); 
  
  }

  updateEnvironment(){

    this.dataCriticality.EnvironmentId = this.formEquipment.get('environment').value
    this.WorkshopService.updateCriticality(this.dataCriticality)
   .subscribe(result => {
     console.log("this.this.environment :" + result.DescriptionContext);

     if (this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.EnvironmentId] == 'Very High - Material Risk Evaluate risk management process'){
      this.flowWizard =  { stepIndex: '8' };
      this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.EnvironmentId]
     // this.dataCriticality.CriticalityLevelId = 4;
     } else {this.flowWizard =   { stepIndex: '4' };}

     this.buttonNextStatusHeald = true ;
     this.buttonNextStatusEnvir = false ;
     this.buttonNextStatusLegal = true ;
     this.buttonNextStatusCommu = true ;
     this.buttonNextStatusFinan = true ;
     this.buttonNextStatusReput = true;



   }); 
 
 }

  updateHealthfactor(){



    this.dataCriticality.HealthfactorId = this.formEquipment.get('healthfactor').value

    console.log("HealthfactorId :" +  this.dataCriticality.HealthfactorId);


    this.WorkshopService.updateCriticality(this.dataCriticality)
   .subscribe(result => {
     console.log("this.this.updateFinancial :" + result.DescriptionContext);

     console.log("this.this.Matrix :" + this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.HealthfactorId]);

     if (this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.HealthfactorId] == 'Very High - Material Risk Evaluate risk management process'){
      this.flowWizard =  { stepIndex: '8' };
      this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.HealthfactorId]
     // this.dataCriticality.CriticalityLevelId = 4;
     } else {this.flowWizard =   { stepIndex: '3' };}

     this.buttonNextStatusHeald = false ;
     this.buttonNextStatusEnvir = true ;
     this.buttonNextStatusLegal = true ;
     this.buttonNextStatusCommu = true ;
     this.buttonNextStatusFinan = true ;
     this.buttonNextStatusReput = true ;
     this.buttonNextStatusReput = true;

  
  
   }); 
 
 }
 updateReputation(){

  this.dataCriticality.ReputationId = this.formEquipment.get('reputation').value;

  let datamayor = Math.max(this.dataCriticality.FinancialId, this.dataCriticality.HealthfactorId,this.dataCriticality.LegalId,this.dataCriticality.ReputationId,this.dataCriticality.EnvironmentId,this.dataCriticality.CommunityId);

  console.log("datamayor :" + datamayor);
  console.log("this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.ReputationId] :" + this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.ReputationId]);


  this.WorkshopService.updateCriticality(this.dataCriticality)
 .subscribe(result => {

   if (this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.ReputationId] == 'Very High - Material Risk Evaluate risk management process'){
    this.flowWizard =  { stepIndex: '8' };
    this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][datamayor];
   
   } else {this.flowWizard =   { stepIndex: '8' };}

   this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][datamayor];
   this.buttonNextStatusHeald = true ;
   this.buttonNextStatusEnvir = true ;
   this.buttonNextStatusLegal = true ;
   this.buttonNextStatusCommu = true ;
   this.buttonNextStatusFinan = true ;
   this.buttonNextStatusReput = false;


 }); 

}

 updateCommunity(){

  this.dataCriticality.CommunityId = this.formEquipment.get('community').value
  this.WorkshopService.updateCriticality(this.dataCriticality)
 .subscribe(result => {
   console.log("this.this.community :" + result.DescriptionContext);

   if (this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.CommunityId] == 'Very High - Material Risk Evaluate risk management process'){
    this.flowWizard =  { stepIndex: '8' };
    this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.CommunityId]
    //this.dataCriticality.CriticalityLevelId = 4;
   } else {this.flowWizard =   { stepIndex: '7' };}

   this.buttonNextStatusHeald = true ;
   this.buttonNextStatusEnvir = true ;
   this.buttonNextStatusLegal = true ;
   this.buttonNextStatusCommu = false ;
   this.buttonNextStatusFinan = true ;


 }); 

}

 updateLegal(){

  this.dataCriticality.LegalId = this.formEquipment.get('legal').value
  this.WorkshopService.updateCriticality(this.dataCriticality)
 .subscribe(result => {
   console.log("this.this.legal :" + result.DescriptionContext);

   
   if (this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.LegalId] == 'Very High - Material Risk Evaluate risk management process'){
    this.flowWizard =  { stepIndex: '8' };
    this.resultCritical = this.MatrixCritical[this.dataCriticality.LikelihoodId-1][this.dataCriticality.LegalId]
  //  this.dataCriticality.CriticalityLevelId = 4;
   } else {this.flowWizard =   { stepIndex: '6' };}

   this.buttonNextStatusHeald = true ;
   this.buttonNextStatusEnvir = true ;
   this.buttonNextStatusLegal = false ;
   this.buttonNextStatusCommu = true ;
   this.buttonNextStatusFinan = true ;


 }); 

}

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  getWorkshopXClient(id:string) {
    return this.WorkshopService.getWorkshopsXClient(id)
               .subscribe(
                workshops => {
                  this.workshops = workshops
                 }
                );
  }

  onChangeWs(event){
      let idWs = event;
      this.getEquipmentXClient(idWs);
      this.getParticipantsSelected(parseInt(idWs));
      this.getReportWS(parseInt(idWs));
      this.wsSelected = idWs;
  }
  public onNodeSelected(e: NodeEvent): void {
  // llamada para obtener bussiness 

    console.log("onNodeSelected");
    console.log(e.node.node.id);
    console.log(e.node.node.value);
    let idEqp = e.node.node.id.toString();
    this.EquipmentById(idEqp);
    this.businessinformationsXEQP(idEqp);
    this.getCriticalityEqp(idEqp,this.wsSelected);

  }

  getCriticalityEqp(idEqp:string,idWs:string){

    this.EquipmentService.getCriticalityEqp(idEqp,idWs)
              .subscribe(result => {
                //this.dataEqpTmp = result;
                console.log('EquipmentService.getCriticalityEqp(');
                console.log(result[0]);
                this.dataCriticality = result[0];
                this.formEquipment.patchValue({
                  contextCriticality: this.dataCriticality.TitleContext,
                  messegeCriticality: this.dataCriticality.DescriptionContext,
                  comentaryCriticality: this.dataCriticality.CriticalityComment,
                  financial:   this.dataCriticality.FinancialId,
                  LLHL:  this.dataCriticality.LikelihoodId,
                  reputation:  this.dataCriticality.ReputationId,
                  community:  this.dataCriticality.CommunityId,
                  legal:  this.dataCriticality.LegalId,
                  environment:  this.dataCriticality.EnvironmentId,
                  healthfactor:  this.dataCriticality.HealthfactorId
                })

                this.idCriticality = this.dataCriticality.id;

              //formControlName=""

              // Financial
              if (this.dataCriticality.FinancialId == 0) { // qui vouy
                this.dataFinancial0 = true;  this.dataFinancial1 = false; this.dataFinancial2 = false; this.dataFinancial3 = false; this.dataFinancial4 = false;this.dataFinancial5 = false;
                this.dataFinancial6 = false;this.dataFinancial7 = false;
              }
              
              if (this.dataCriticality.FinancialId == 1) { 
                this.dataFinancial0 = false;this.dataFinancial1 = true; this.dataFinancial2 = false; this.dataFinancial3 = false; this.dataFinancial4 = false;this.dataFinancial5 = false;
                this.dataFinancial6 = false;this.dataFinancial7 = false;
              }

              if (this.dataCriticality.FinancialId == 2) { 
                this.dataFinancial0 = false; this.dataFinancial1 = false; this.dataFinancial2 = true; this.dataFinancial3 = false; this.dataFinancial4 = false;this.dataFinancial5 = false;
                this.dataFinancial6 = false;this.dataFinancial7 = false;
              }

              if (this.dataCriticality.FinancialId == 3) { 
                this.dataFinancial0 = false; this.dataFinancial1 = false; this.dataFinancial2 = false; this.dataFinancial3 = true; this.dataFinancial4 = false;this.dataFinancial5 = false;
                this.dataFinancial6 = false;this.dataFinancial7 = false;
              }

              if (this.dataCriticality.FinancialId == 4) { 
                this.dataFinancial0 = false;this.dataFinancial1 = false; this.dataFinancial2 = false; this.dataFinancial3 = false; this.dataFinancial4 = true;this.dataFinancial5 = false;
                this.dataFinancial6 = false;this.dataFinancial7 = false;
              }
              
              if (this.dataCriticality.FinancialId == 5) { 
                this.dataFinancial0 = false; this.dataFinancial1 = false; this.dataFinancial2 = false; this.dataFinancial3 = false; this.dataFinancial4 = false;this.dataFinancial5 = true;
                this.dataFinancial6 = false;this.dataFinancial7 = false;
              }
              if (this.dataCriticality.FinancialId == 6) { 
                this.dataFinancial0 = false; this.dataFinancial1 = false; this.dataFinancial2 = false; this.dataFinancial3 = false; this.dataFinancial4 = false;this.dataFinancial5 = false;
                this.dataFinancial6 = true;this.dataFinancial7 = false;
              }
              if (this.dataCriticality.FinancialId == 7) { 
                this.dataFinancial0 = false; this.dataFinancial1 = false; this.dataFinancial2 = false; this.dataFinancial3 = false; this.dataFinancial4 = false;this.dataFinancial5 = false;
                this.dataFinancial6 = false;this.dataFinancial7 = true;
              }  

              // HealthfactorId

              if (this.dataCriticality.HealthfactorId == 0) { 
                this.dataHealthfactor0 = true; this.dataHealthfactor1 = false; this.dataHealthfactor2 = false; this.dataHealthfactor3 = false; this.dataHealthfactor4 = false;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = false;
              }
             
              if (this.dataCriticality.HealthfactorId == 1) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = true; this.dataHealthfactor2 = false; this.dataHealthfactor3 = false; this.dataHealthfactor4 = false;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = false;
              }

              if (this.dataCriticality.HealthfactorId == 2) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = false; this.dataHealthfactor2 = true; this.dataHealthfactor3 = false; this.dataHealthfactor4 = false;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = false;
              }

              if (this.dataCriticality.HealthfactorId == 3) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = false; this.dataHealthfactor2 = false; this.dataHealthfactor3 = true; this.dataHealthfactor4 = false;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = false;
              }

              if (this.dataCriticality.HealthfactorId == 4) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = false; this.dataHealthfactor2 = false; this.dataHealthfactor3 = false; this.dataHealthfactor4 = true;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = false;
              }
              
              if (this.dataCriticality.HealthfactorId == 5) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = false; this.dataHealthfactor2 = false; this.dataHealthfactor3 = false; this.dataHealthfactor4 = false;this.dataHealthfactor5 = true;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = false;
              }
              if (this.dataCriticality.HealthfactorId == 6) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = false; this.dataHealthfactor2 = false; this.dataHealthfactor3 = false; this.dataHealthfactor4 = false;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = true;this.dataHealthfactor7 = false;
              }
              if (this.dataCriticality.HealthfactorId == 7) { 
                this.dataHealthfactor0 = false;this.dataHealthfactor1 = false; this.dataHealthfactor2 = false; this.dataHealthfactor3 = false; this.dataHealthfactor4 = false;this.dataHealthfactor5 = false;
                this.dataHealthfactor6 = false;this.dataHealthfactor7 = true;
              }  



              // Legal
              if (this.dataCriticality.LegalId == 0) { 
                this.dataLegal0 = true; this;this.dataLegal1 = false; this.dataLegal2 = false; this.dataLegal3 = false; this.dataLegal4 = false;this.dataLegal5 = false;
                this.dataLegal6 = false;this.dataLegal7 = false;
              }
              if (this.dataCriticality.LegalId == 1) { 
                this.dataLegal0 = false;this.dataLegal1 = true; this.dataLegal2 = false; this.dataLegal3 = false; this.dataLegal4 = false;this.dataLegal5 = false;
                this.dataLegal6 = false;this.dataLegal7 = false;
              }

              if (this.dataCriticality.LegalId == 2) { 
                this.dataLegal0 = false;this.dataLegal1 = false; this.dataLegal2 = true; this.dataLegal3 = false; this.dataLegal4 = false;this.dataLegal5 = false;
                this.dataLegal6 = false;this.dataLegal7 = false;
              }

              if (this.dataCriticality.LegalId == 3) { 
                this.dataLegal0 = false;this.dataLegal1 = false; this.dataLegal2 = false; this.dataLegal3 = true; this.dataLegal4 = false;this.dataLegal5 = false;
                this.dataLegal6 = false;this.dataLegal7 = false;
              }

              if (this.dataCriticality.LegalId == 4) { 
                this.dataLegal0 = false;this.dataLegal1 = false; this.dataLegal2 = false; this.dataLegal3 = false; this.dataLegal4 = true;this.dataLegal5 = false;
                this.dataLegal6 = false;this.dataLegal7 = false;
              }
              
              if (this.dataCriticality.LegalId == 5) { 
                this.dataLegal0 = false;this.dataLegal1 = false; this.dataLegal2 = false; this.dataLegal3 = false; this.dataLegal4 = false;this.dataLegal5 = true;
                this.dataLegal6 = false;this.dataLegal7 = false;
              }
              if (this.dataCriticality.LegalId == 6) { 
                this.dataLegal0 = false;this.dataLegal1 = false; this.dataLegal2 = false; this.dataLegal3 = false; this.dataLegal4 = false;this.dataLegal5 = false;
                this.dataLegal6 = true;this.dataLegal7 = false;
              }
              if (this.dataCriticality.LegalId == 7) { 
                this.dataLegal0 = false;this.dataLegal1 = false; this.dataLegal2 = false; this.dataLegal3 = false; this.dataLegal4 = false;this.dataLegal5 = false;
                this.dataLegal6 = false;this.dataLegal7 = true;
              }  

              // Community
              if (this.dataCriticality.CommunityId == 0) { 
                this.dataCommunity0 = true; this.dataCommunity1 = false; this.dataCommunity2 = false; this.dataCommunity3 = false; this.dataCommunity4 = false;this.dataCommunity5 = false;
                this.dataCommunity6 = false;this.dataCommunity7 = false;
              }             
              if (this.dataCriticality.CommunityId == 1) { 
                this.dataCommunity0 = false; this.dataCommunity1 = true; this.dataCommunity2 = false; this.dataCommunity3 = false; this.dataCommunity4 = false;this.dataCommunity5 = false;
                this.dataCommunity6 = false;this.dataCommunity7 = false;
              }

              if (this.dataCriticality.CommunityId == 2) { 
                this.dataCommunity0 = false;this.dataCommunity1 = false; this.dataCommunity2 = true; this.dataCommunity3 = false; this.dataCommunity4 = false;this.dataCommunity5 = false;
                this.dataCommunity6 = false;this.dataCommunity7 = false;
              }

              if (this.dataCriticality.CommunityId == 3) { 
                this.dataCommunity0 = false;this.dataCommunity1 = false; this.dataCommunity2 = false; this.dataCommunity3 = true; this.dataCommunity4 = false;this.dataCommunity5 = false;
                this.dataCommunity6 = false;this.dataCommunity7 = false;
              }

              if (this.dataCriticality.CommunityId == 4) { 
                this.dataCommunity0 = false;this.dataCommunity1 = false; this.dataCommunity2 = false; this.dataCommunity3 = false; this.dataCommunity4 = true;this.dataCommunity5 = false;
                this.dataCommunity6 = false;this.dataCommunity7 = false;
              }
              
              if (this.dataCriticality.CommunityId == 5) { 
                this.dataCommunity0 = false;this.dataCommunity1 = false; this.dataCommunity2 = false; this.dataCommunity3 = false; this.dataCommunity4 = false;this.dataCommunity5 = true;
                this.dataCommunity6 = false;this.dataCommunity7 = false;
              }
              if (this.dataCriticality.CommunityId == 6) { 
                this.dataCommunity0 = false;this.dataCommunity1 = false; this.dataCommunity2 = false; this.dataCommunity3 = false; this.dataCommunity4 = false;this.dataCommunity5 = false;
                this.dataCommunity6 = true;this.dataCommunity7 = false;
              }
              if (this.dataCriticality.CommunityId == 7) { 
                this.dataCommunity0 = false; this.dataCommunity1 = false; this.dataCommunity2 = false; this.dataCommunity3 = false; this.dataCommunity4 = false;this.dataCommunity5 = false;
                this.dataCommunity6 = false;this.dataCommunity7 = true;
              }  


              //Environment
               
              if (this.dataCriticality.EnvironmentId == 0) { 
                this.dataEnvironment0 = true; this.dataEnvironment1 = false; this.dataEnvironment2 = false; this.dataEnvironment3 = false; this.dataEnvironment4 = false;this.dataEnvironment5 = false;
                this.dataEnvironment6 = false;this.dataEnvironment7 = false;
              }             
              if (this.dataCriticality.EnvironmentId == 1) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = true; this.dataEnvironment2 = false; this.dataEnvironment3 = false; this.dataEnvironment4 = false;this.dataEnvironment5 = false;
                this.dataEnvironment6 = false;this.dataEnvironment7 = false;
              }

              if (this.dataCriticality.EnvironmentId == 2) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = false; this.dataEnvironment2 = true; this.dataEnvironment3 = false; this.dataEnvironment4 = false;this.dataEnvironment5 = false;
                this.dataEnvironment6 = false;this.dataEnvironment7 = false;
              }

              if (this.dataCriticality.EnvironmentId == 3) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = false; this.dataEnvironment2 = false; this.dataEnvironment3 = true; this.dataEnvironment4 = false;this.dataEnvironment5 = false;
                this.dataEnvironment6 = false;this.dataEnvironment7 = false;
              }

              if (this.dataCriticality.EnvironmentId == 4) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = false; this.dataEnvironment2 = false; this.dataEnvironment3 = false; this.dataEnvironment4 = true;this.dataEnvironment5 = false;
                this.dataEnvironment6 = false;this.dataEnvironment7 = false;
              }
              
              if (this.dataCriticality.EnvironmentId == 5) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = false; this.dataEnvironment2 = false; this.dataEnvironment3 = false; this.dataEnvironment4 = false;this.dataEnvironment5 = true;
                this.dataEnvironment6 = false;this.dataEnvironment7 = false;
              }
              if (this.dataCriticality.EnvironmentId == 6) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = false; this.dataEnvironment2 = false; this.dataEnvironment3 = false; this.dataEnvironment4 = false;this.dataEnvironment5 = false;
                this.dataEnvironment6 = true;this.dataEnvironment7 = false;
              }
              if (this.dataCriticality.EnvironmentId == 7) { 
                this.dataEnvironment0 = false; this.dataEnvironment1 = false; this.dataEnvironment2 = false; this.dataEnvironment3 = false; this.dataEnvironment4 = false;this.dataEnvironment5 = false;
                this.dataEnvironment6 = false;this.dataEnvironment7 = true;
              }  

              // Reputation
              if (this.dataCriticality.ReputationId == 0) { 
                this.dataReputation0 = true;  this.dataReputation1 = false; this.dataReputation2 = false; this.dataReputation3 = false; this.dataReputation4 = false;this.dataReputation5 = false;
                this.dataReputation6 = false;this.dataReputation7 = false;
              }

              if (this.dataCriticality.ReputationId == 1) { 
                this.dataReputation0 = true;  this.dataReputation1 = true; this.dataReputation2 = false; this.dataReputation3 = false; this.dataReputation4 = false;this.dataReputation5 = false;
                this.dataReputation6 = false;this.dataReputation7 = false;
              }

              if (this.dataCriticality.ReputationId == 2) { 
                this.dataReputation0 = true;  this.dataReputation1 = false; this.dataReputation2 = true; this.dataReputation3 = false; this.dataReputation4 = false;this.dataReputation5 = false;
                this.dataReputation6 = false;this.dataReputation7 = false;
              }

              if (this.dataCriticality.ReputationId == 3) { 
                this.dataReputation0 = true;  this.dataReputation1 = false; this.dataReputation2 = false; this.dataReputation3 = true; this.dataReputation4 = false;this.dataReputation5 = false;
                this.dataReputation6 = false;this.dataReputation7 = false;
              }

              if (this.dataCriticality.ReputationId == 4) { 
                this.dataReputation0 = true;   this.dataReputation1 = false; this.dataReputation2 = false; this.dataReputation3 = false; this.dataReputation4 = true;this.dataReputation5 = false;
                this.dataReputation6 = false;this.dataReputation7 = false;
              }
              
              if (this.dataCriticality.ReputationId == 5) { 
                this.dataReputation0 = true;   this.dataReputation1 = false; this.dataReputation2 = false; this.dataReputation3 = false; this.dataReputation4 = false;this.dataReputation5 = true;
                this.dataReputation6 = false;this.dataReputation7 = false;
              }
              if (this.dataCriticality.ReputationId == 6) { 
                this.dataReputation0 = true;  this.dataReputation1 = false; this.dataReputation2 = false; this.dataReputation3 = false; this.dataReputation4 = false;this.dataReputation5 = false;
                this.dataReputation6 = true;this.dataReputation7 = false;
              }
              if (this.dataCriticality.ReputationId == 7) { 
                this.dataReputation0 = true;   this.dataReputation1 = false; this.dataReputation2 = false; this.dataReputation3 = false; this.dataReputation4 = false;this.dataReputation5 = false;
                this.dataReputation6 = false;this.dataReputation7 = true;
              }  


              // LikeHood
              if (this.dataCriticality.LikelihoodId == 1) { 
                this.dataLHL1 = true; this.dataLHL2 = false; this.dataLHL3 = false; this.dataLHL4 = false; this.dataLHL5 = false
              }
              if (this.dataCriticality.LikelihoodId == 2) { 
                this.dataLHL1 = false; this.dataLHL2 = true; this.dataLHL3 = false; this.dataLHL4 = false; this.dataLHL5 = false
              }
              if (this.dataCriticality.LikelihoodId == 3) { 
                this.dataLHL1 = false; this.dataLHL2 = false; this.dataLHL3 = true; this.dataLHL4 = false; this.dataLHL5 = false
              }

              if (this.dataCriticality.LikelihoodId == 4) { 
                this.dataLHL1 = false; this.dataLHL2 = false; this.dataLHL3 = false; this.dataLHL4 = true; this.dataLHL5 = false
              }

              if (this.dataCriticality.LikelihoodId == 5) { 
                this.dataLHL1 = false; this.dataLHL2 = false; this.dataLHL3 = false; this.dataLHL4 = false; this.dataLHL5 = true
              }

              });
  }

  EquipmentById (id:string) {
    return this.EquipmentService.getEquipmentById(parseInt(id))
               .subscribe(
                equipment => {
                  this.equipments = equipment

                  console.log(this.equipments );

                  this.formEquipment.patchValue({
                    namecc: this.equipments.centerCost,
                    nametype: this.equipments.type,
                    nametn: this.equipments.idTagNumber,
                    namefl: this.equipments.functionalLocation,
                    nameeqp: this.equipments.functionalLocationsDescription
  
                  })

                  if (this.equipments != 0){
                  this.urlPhoto = this.equipments.functionalLocation + "/";
                  this.cantPhot = parseInt(this.equipments.photo) ;
                  //var arr_names:number[] = new Array(this.cantPhot) 
                  
                  console.log('this.cantPhot');
                  console.log(this.cantPhot);

                   this.ArrayCantPhoto = Array.from(Array(this.cantPhot), (_,x) => x);

                   console.log('this.ArrayCantPhoto');

                   console.log(this.ArrayCantPhoto);

                /*   for (var i = 0; i < arr_names.length; i++) {
                     arr_names[i] = i + 1;
                     console.log(arr_names[i]);
                  } */

                } else {

                  this.urlPhoto = "";
                 
                  this.ArrayCantPhoto = Array.from(Array(1), (_,x) => x);
                  
                  console.log('this.ArrayCantPhoto');

                  console.log(this.ArrayCantPhoto);
                }
                  console.log('INICIO PHOTO');
                  console.log(this.urlPhoto);
                  console.log(this.cantPhot);
                  console.log('END PHOTO');

/*                   namecc:  ['', [Validators.required]],
                  nametype:  ['', [Validators.required]],
                  nametn:  ['', [Validators.required]],
                  namefl:  ['', [Validators.required]],
                  StatusCodeId: 1
                  TypeMachineId: 1
                  centerCost: "7014801"
                  createdAt: "2019-01-28T13:27:31.000Z"
                  father: 5
                  functionalLocation: "2025.01.01.01-CN001"
                  functionalLocationsDescription: "Crane Bridge Water Pump PGRU2"
                  id: 6
                  idTagNumber: "999999"
                  photo: "path-image"
                  planes: "plane-image"
                  type: "80255249"
                  updatedAt: "2019-01-28T13:27:31.000Z"
                  video: "video" */



                }
                );
  }


  businessinformationsXEQP(id:string) {
    return this.BusinessinformationsService.businessinformationsXEQP(id)
               .subscribe(
                businessinformations => {
                  this.businessinformations = businessinformations

                  this.formEquipment.patchValue({
                    nameccp: this.businessinformations[0].costPerUnit,
                    nameccr: this.businessinformations[0].criticality,
                    nameccrs: this.businessinformations[0].criticalitySec,
                    namedownloadc: this.businessinformations[0].downtimeCalculations,
                    nameeqpr: this.businessinformations[0].equipmentRuntime,
                    namefunloc: this.businessinformations[0].functionalLocation,
                    namehourop: this.businessinformations[0].hoursOfOperation,
                    nameprodper: this.businessinformations[0].productionPeriod,
                    nameprouni: this.businessinformations[0].productionUnit,
                    nameprodunihour: this.businessinformations[0].productionUnitHour
  
                  })
                 }
                );
  }

 getEquipmentXClient(id:string) {
    return this.EquipmentService.getEquipmentXClient(id)
               .subscribe(
                equipments => {
                  this.equipments = equipments

                  console.log("this.equipments.length" + this.equipments.length)
                  if (this.equipments.length != 0) {
                          let dataEqpTmp = [];
                          let dataEqpTmpDet = [];
                          let dataEqpTmpDetSheet = [];
                          let j = 0;
                          let k = 0;
                          let l = 0;
                          let grandfather = 0  ;
                          let father = 0 ;
                          let sheet = 0 ; 
                          let count = 0 ;
                          let treeData =  { children: [ { value:[],id:[],children :[{value:[],id:[],children:[{value:[], id:[]}]}] } ] } ;
                          let treeDataDet = { value:[],id:[],children :[{value:[],id:[],children:[{value:[], id:[]}]}]} ;
                          let treeDataSheet = {value:[],id:[],children:[{value:[], id:[]}]};
                          let  tDSheet =  {value:[], id:[]};

                          let treeOk ;
                          for( var i = 0; i < this.equipments.length; i++){ 

                            let dataStructClear = {
                              "TypeMachineId" : "",
                              "centerCost": "",
                              "createdAt": "",
                              "father": "",
                              "functionalLocation":"",
                              "functionalLocationsDescription": "",
                              "id": "",
                              "StatusCodeId": "",
                              "idTagNumber": "",
                              "photo": "",
                              "planes": "",
                              "type": "",
                              "updatedAt": "",
                              "video": ""
                            };

                          

                          if (this.equipments[i].father == 1) {
                        /*       dataStructClear.TypeMachineId = this.equipments[i].TypeMachineId;
                              dataStructClear.centerCost = this.equipments[i].centerCost;
                              dataStructClear.createdAt = this.equipments[i].createdAt;
                              dataStructClear.father = this.equipments[i].father;
                              dataStructClear.functionalLocation = this.equipments[i].functionalLocation;
                              dataStructClear.functionalLocationsDescription = this.equipments[i].functionalLocationsDescription;
                              dataStructClear.id = this.equipments[i].id;
                              dataStructClear.StatusCodeId = this.equipments[i].StatusCodeId;
                              dataStructClear.idTagNumber = this.equipments[i].idTagNumber;
                              dataStructClear.photo = this.equipments[i].photo;
                              dataStructClear.planes = this.equipments[i].planes;
                              dataStructClear.type = this.equipments[i].type;
                              dataStructClear.updatedAt = this.equipments[i].updatedAt;
                              dataStructClear.video = this.equipments[i].video;

                              dataEqpTmp.push(dataStructClear); */

                              var copiaEqpIdGF = Object.assign({}, this.equipments[i]);                              
                              treeData.children[j].id = copiaEqpIdGF.id;
                              treeData.children[j].value = copiaEqpIdGF.functionalLocation;
                            //
                            
        
                              console.log('this.equipments[0]');
                              console.log(this.equipments[0]);

                              console.log('this.equipments[i]' + i);
                              console.log(this.equipments[i]);

                              console.log('dataStructClear');
                              console.log(dataStructClear);

                              console.log('dataEqpTmp = 1');
                              console.log(dataEqpTmp); 

                              grandfather = this.equipments[i].id;

                              k=0;
                              l=0;

                            }

                           console.log('grandfather');
                            console.log(grandfather);

                            console.log('this.equipments[i].father ');
                            console.log(this.equipments[i].father );

                            if (this.equipments[i].father == grandfather) {
                        /*       dataStructClear.TypeMachineId = this.equipments[i].TypeMachineId;
                              dataStructClear.centerCost = this.equipments[i].centerCost;
                              dataStructClear.createdAt = this.equipments[i].createdAt;
                              dataStructClear.father = this.equipments[i].father;
                              dataStructClear.functionalLocation = this.equipments[i].functionalLocation;
                              dataStructClear.functionalLocationsDescription = this.equipments[i].functionalLocationsDescription;
                              dataStructClear.id = this.equipments[i].id;
                              dataStructClear.StatusCodeId = this.equipments[i].StatusCodeId;
                              dataStructClear.idTagNumber = this.equipments[i].idTagNumber;
                              dataStructClear.photo = this.equipments[i].photo;
                              dataStructClear.planes = this.equipments[i].planes;
                              dataStructClear.type = this.equipments[i].type;
                              dataStructClear.updatedAt = this.equipments[i].updatedAt;
                              dataStructClear.video = this.equipments[i].video;
                              dataEqpTmpDet.push(dataStructClear); */
                              var copiaEqpIdF = Object.assign({}, this.equipments[i]);
                              treeData.children[j].children[k].id = copiaEqpIdF.id;
                              treeData.children[j].children[k].value = copiaEqpIdF.functionalLocation;
                            //  treeData.children[j].children.push(treeDataSheet);
                              l=0;
                              
                              console.log('dataEqpTmpDet');
                              console.log(dataEqpTmpDet);
                              console.log('dataStructClear');
                              console.log(dataStructClear);
                              

                              father = this.equipments[i].id;
                            }

                            console.log('father');
                            console.log(father);

                            console.log('dataEqpTmpDet');
                            console.log(dataEqpTmpDet);
                            
                            console.log('dataEqpTmp');
                            console.log(dataEqpTmp);

                            console.log('dataEqpTmpDetSheet');
                            console.log(dataEqpTmpDetSheet); 

                            console.log('this.equipments[i].father ');
                            console.log(this.equipments[i].father );
                            console.log('father ');
                            console.log(father);

                            if (father == this.equipments[i].father) {
                              /* dataStructClear.TypeMachineId = this.equipments[i].TypeMachineId;
                              dataStructClear.centerCost = this.equipments[i].centerCost;
                              dataStructClear.createdAt = this.equipments[i].createdAt;
                              dataStructClear.father = this.equipments[i].father;
                              dataStructClear.functionalLocation = this.equipments[i].functionalLocation;
                              dataStructClear.functionalLocationsDescription = this.equipments[i].functionalLocationsDescription;
                              dataStructClear.id = this.equipments[i].id;
                              dataStructClear.StatusCodeId = this.equipments[i].StatusCodeId;
                              dataStructClear.idTagNumber = this.equipments[i].idTagNumber;
                              dataStructClear.photo = this.equipments[i].photo;
                              dataStructClear.planes = this.equipments[i].planes;
                              dataStructClear.type = this.equipments[i].type;
                              dataStructClear.updatedAt = this.equipments[i].updatedAt;
                              dataStructClear.video = this.equipments[i].video;
                              dataEqpTmpDetSheet.push(dataStructClear); */
                             
                              var copiaEqpId = Object.assign({}, this.equipments[i]);
                              treeData.children[j].children[k].children[l].id = copiaEqpId.id;

                            
                       
                              var copiaEqpFl = Object.assign({}, this.equipments[i]);
                              treeData.children[j].children[k].children[l].value = copiaEqpFl.functionalLocation;
                              //treeData.children[j].children[k].children.push({value:[], id:[]});

                              sheet = this.equipments[i].father;
                              
                              l++
                             console.log('i[' + i + ']');
                                count = i + 1;

                                 console.log('count[');
                                console.log(count);
              

                              if ((count < this.equipments.length) ){
                                
                               console.log('this.equipments.length');
                                console.log(this.equipments.length);
                                console.log('count[');
                                console.log(count);
                                console.log('sheet[');
                                console.log(sheet); 
            

                                console.log('sheet ');
                                console.log(sheet);
                                console.log('this.equipments[count].father ');
                                console.log(this.equipments[count].father);

                                if (sheet !=  this.equipments[count].father) {

                                
                                      //dataEqpTmpDet[k].push(dataEqpTmpDetSheet);
                                      //dataEqpTmp[j].push(dataEqpTmpDet);

                                      let treeDataSheetA = {value:[],id:[],children:[{value:[], id:[]}]};
                                      var copiatreeDataSheet = Object.assign({}, treeDataSheetA);
                                      treeData.children[j].children.push(copiatreeDataSheet);

                                      var copiaStructA = Object.assign({},tDSheet);
                                      treeData.children[j].children[k].children.push(copiaStructA);

                                      if (this.equipments[count].father == 1 ) {
                                        var copiatreeDataDet = Object.assign({}, treeDataDet);
                                        treeData.children.push(copiatreeDataDet);
                                        j++;}
                                      
                                      k++;
                                      l=0;
                                      


                                     console.log('dataEqpTmp[');
                                      console.log(dataEqpTmp);


                                      console.log('dataEqpTmpDet[');
                                      console.log(dataEqpTmpDet);

                                      
                                      console.log('dataEqpTmpDetSheet[');
                                      console.log(dataEqpTmpDetSheet); 

                                    } else {
                                      var copiaStruct = Object.assign({}, tDSheet);

                                      treeData.children[j].children[k].children.push(copiaStruct);

                                    }
                              } else { // es el ultimo registro a incorporar 
                                //dataEqpTmpDet[k].push(dataEqpTmpDetSheet);
                                //dataEqpTmp[j].push(dataEqpTmpDet);
                              //  treeData.children.push(treeDataDet);
                                
                              //  treeData.children[j].children.push(treeDataSheet);
                              
                              // treeData.children[j].children[k].children.push({value:[], id:[]});
                                //j++;
                                //k++;
                              }
                            }
                            





        /* 
                            console.log('k: [' + k + '] -- j: [' + j + ']' );
                            console.log(treeData); */
                            
                          /*   treeData.children[j].value.push('padre value');
                            treeData.children[j].id.push('padre id'); */

                            //treeData.children.push(treeDataDet);
                          // treeData.children[j].children.push(treeDataSheet);
                            
                          // console.log('k: [' + k + '] -- j: [' + j + ']' );
                          // console.log(treeData.children[j]);

                /*            treeData.children[j].children[k].value.push('nivel value pade');
                          // treeData.children[j].children[k].children.push(tDSheet);
                            
                          
                            treeData.children[j].children[k].id.push('nivel oadre');
                            treeData.children[j].children[k].children[l].id.push('x-id');
                            treeData.children[j].children[k].children[l].value.push('x');
                            
                          
                            k++;
                            l++;
                  
        */


                          // treeOk = treeData;

                          }

                          console.log('treeDataARRAY');
                          console.log(treeData);
                          

                          console.log('treeDataJSON');
                          console.log(JSON.stringify(treeData));


                          console.log('SALIDA FINAL');
                          console.log(dataEqpTmp);

                          console.log(' ANTES DE : this.dataTree');
                          console.log( this.dataTree); 
                          
                          // Formar Data Tree Final 



                          this.dataTreeTMP = {
                            value: '/',
                            id: 0,
                            settings : this.settingTree ,
                            children : treeData.children
                          }
    /*                   
                          console.log( 'this.dataTreeTMP'); 
                          console.log( this.dataTreeTMP); 
                          console.log(JSON.stringify(this.dataTreeTMP)); */

                          //this.dataTree = JSON.stringify(this.dataTreeTMP);

                } else {

                  this.dataTreeTMP = {value: '',
                  id: 0};

                }
                 }
                );
  } 


  getReportWS(id:number) {
    return this.WorkshopService.getReportWS(id.toString())
             .subscribe(
               result => {

                console.log('.parseJSON(JSON.stringify(result.data)');
                console.log(result);

                this.dataTmp = $.parseJSON(JSON.stringify(result));

                console.log('.parseJSON(JSON.stringify(dataTmp.data)');
                console.log(this.dataTmp);

                this.dataGrahWS = this.dataTmp;

             
              }
                );
              }
      


  getParticipantsSelected(id:number) {
    return this.WorkshopService.getParticipantsSelected(id.toString())
             .subscribe(
               result => {

                console.log('.getParticipantsSelected');
                console.log(result);

                this.dataTmp = $.parseJSON(JSON.stringify(result));

                console.log('.parseJSON(JSON.stringify(getParticipantsSelected.data)');
                console.log(this.dataTmp);

                // cargar participantes asociasdos al workshop
                for( var j = 0; j < this.dataTmp.length; j++){                  
                   this.data.push(this.dataTmp[j].Participant);
                } 

                console.log('this.data');
                console.log(this.data);



                this.data = $.parseJSON(JSON.stringify(this.data)); 


             


                this.participantsws = this.data;

                                   
                console.log('.participantsws');
                console.log(this.participantsws);
          
               }
              );
   }


}
