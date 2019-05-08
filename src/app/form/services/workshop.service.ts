import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
//import {RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import { Participant } from '../models/participants';
import { Project } from '../models/projects';
import { Statuscode } from '../models/statuscodes';
import { Typemachine } from '../models/typemachines';
import { Equipment } from 'src/app/component/models/equipment';
import { EquipmentCrud } from 'src/app/component/models/equipmentCrud';
import { Workshop } from '../models/workshop';
import {AppConstants} from '../../constants/constant'

import { Participant_has_workshop } from '../models/participant_has_workshop';

/* import { Lh_has_clsContext } from '../models/criticality_context'; */
import { Lh_hs_cls } from '../../component/models/lh_hs_cls';

import { Workshop_has_equipments } from '../models/workshop_has_equipments';
import { Participant_ws} from '../models/participant_ws';
import { Client_ws} from '../models/client_ws';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class WorkshopService {

    _baseURL = AppConstants.baseURL;

    private participantsUrl = this._baseURL + '/participants';  // URL to web api
    private EquipmentUrl = this._baseURL + '/equipments-grouped';  // URL to web api
    private EquipmentsXFatherUrl = this._baseURL + '/equipmentsXFather';  // URL to web api
    private EquipmentsXGrandFatherUrl = this._baseURL + '/equipmentsXGrandFather';  // URL to web api
    
    private WorkshopUrl = this._baseURL + '/workshops';  // URL to web api
    private WorkshopXClientUrl = this._baseURL + '/workshopsxclient';  // URL to web api
    private ProjectUrl = this._baseURL + '/projects';  // URL to web api
    private ProjectsxclientUrl = this._baseURL + '/projectsxclient';  // URL to web api
    

    private Workshop_has_equipmentsUrl = this._baseURL + '/workshop_has_equipments';  // URL to web api
    private Participant_has_workshopsUrl = this._baseURL + '/participant_has_workshops';  // URL to web api

    private ParticipantWsUrl = this._baseURL + '/participant_has_workshopsfbw';  // URL to web api
    private EquipmentXWSUrl = this._baseURL + '/equipmentsXWS';  // URL to web api
  
    private Lh_has_clsUrl = this._baseURL + '/lh_has_cls';  // URL to web api

    private ReportsUrl = this._baseURL + '/report-criticality-ws';  // URL to web api


    private EquipmentCrudUrl = this._baseURL + '/equipments';  // URL to web api


    private StatuscodesUrl = this._baseURL + '/statuscodes';  // URL to web api
    private TypemachinesUrl = this._baseURL + '/typemachines';  // URL to web api
    
    private equipmentsAllUrl =  this._baseURL + '/equipments';


    constructor( 
      private http: HttpClient
    ) { }
  
    getParticipants (): Observable<Participant[]> {
      return this.http.get<Participant[]>(this.participantsUrl)
    }


    getStatusCodes(): Observable<Statuscode[]> {
      return this.http.get<Statuscode[]>(this.StatuscodesUrl)
    }
    
    getTypemachines(): Observable<Typemachine[]> {
      return this.http.get<Typemachine[]>(this.TypemachinesUrl)
    }

    getEquipmentGroup (): Observable<Equipment[]> {

      let datawork = this.http.get<Equipment[]>(this.EquipmentUrl)
      // hacer el ciclo y armar la nueva estructura 
     // console.log('datawork:' + JSON.stringify(datawork));
      return datawork;
    }
  


getEquipmentsAll (): Observable<EquipmentCrud[]> {

  let datawork = this.http.get<EquipmentCrud[]>(this.equipmentsAllUrl)

  return datawork;
}

    getWorkshops (): Observable<Workshop[]> {

      let datawork = this.http.get<Workshop[]>(this.WorkshopUrl)
      // hacer el ciclo y armar la nueva estructura 

      console.log('datawork:' + JSON.stringify(datawork));
      console.log(datawork);
      return datawork;
    }

/*     getParticipantsSelected(participant_ws: Participant_ws): Observable<Participant_has_workshop> {
      return this.http.get<Participant_has_workshop>(this.ParticipantWsUrl, httpOptions);
    } */

/*     getParticipantsSelected(participant_ws: Participant_ws): Observable<Participant_has_workshop> {
      return this.http.get<Participant_has_workshop>(this.ParticipantWsUrl, httpOptions);
    } */


    getEquipmentsSelected(id:string): Observable<Workshop_has_equipments> {
      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})}

      const params = new HttpParams()
      .set('WorkShopId', id)

      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Workshop_has_equipments>(this.EquipmentXWSUrl , options)

      console.log('datawork:' + JSON.stringify(datawork));
      console.log(datawork);
      return datawork;
    }

    getReportWS(id:string): Observable<Lh_hs_cls> {
      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})}

      const params = new HttpParams()
      .set('WorkShopId', id)

      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Lh_hs_cls>(this.ReportsUrl , options)

      console.log('datawork: ReportsUrl');
      console.log(datawork);
      return datawork;
    }



    getParticipantsSelected(id:string): Observable<Participant_has_workshop> {
      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})}

      console.log('id : ' + id);

      const params = new HttpParams()
      .set('idws', id)

      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Participant_has_workshop>(this.ParticipantWsUrl , options)

      console.log('datawork: Participant_has_workshop');
      console.log(datawork);
      return datawork;
    }

    getWorkshopsXClient(id:string): Observable<Workshop> {


      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})}

      const params = new HttpParams()
      .set('ClientIdX', id)

      //.set('ClientIdX1', id);
      //const myObject: any = { this: 'thisThing', that: 'thatThing', other: 'otherThing'};
     // const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
      //const options = { params: httpParams, headers: myHeaders };
      

      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Workshop>(this.WorkshopXClientUrl , options)

     console.log('datawork:' + JSON.stringify(datawork));
     console.log(datawork);
     return datawork;
    }



    getDataGrandFather(dataGrandFather:number[]): Observable<Equipment[]> {

      console.log('dataGrandFather.WORKSHOP.SERVICE');
      console.log(dataGrandFather);

      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})}

      var params = new HttpParams();
/*       .append('fatherId', '5')
      .append('fatherId', '5') */
      for( var i = 0; i < dataGrandFather.length; i++){ 
        console.log(' dataGrandFather[i].toStrin');
        console.log(dataGrandFather[i].toString());

        params = params.append('fatherId', dataGrandFather[i].toString());
      } 

      //params.set('fatherId', '5');
     // params.set('fatherId', '5');
      
      console.log('params - fatherId');
      console.log(params);
      
      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Equipment[]>(this.EquipmentsXGrandFatherUrl , options)

     console.log('datawork:' + JSON.stringify(datawork));
     console.log(datawork);
     return datawork;
    }


    getDataFather(dataFather:number[]): Observable<Equipment[]> {

      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
  
      var params = new HttpParams();
      for( var i = 0; i < dataFather.length; i++){ 
        params = params.append('id', dataFather[i].toString());
      }
      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Equipment[]>(this.EquipmentsXFatherUrl , options)

     return datawork;
    }

    getProjectsXCli(idCli: number){

      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  


      const params = new HttpParams()
      .set('ClientIdX', idCli.toString())

      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.get<Project[]>(this.ProjectsxclientUrl , options)

     return datawork;

    }

    getProjects (): Observable<Project[]> {
      let datawork = this.http.get<Project[]>(this.ProjectUrl)
      // hacer el ciclo y armar la nueva estructura 
     // console.log('datawork:' + JSON.stringify(datawork));
      return datawork;
    }
  
    addWorkshop(workshop: Workshop): Observable<Workshop> {
      return this.http.post<Workshop>(this.WorkshopUrl, workshop, httpOptions);
    }

    
    
    updateParticipants(participant_has_workshop: Participant_has_workshop): Observable<Participant_has_workshop> {
      return this.http.put<Participant_has_workshop>(this.Participant_has_workshopsUrl, participant_has_workshop, httpOptions);
    }

    updateCriticality(lh_has_cls: Lh_hs_cls): Observable<Lh_hs_cls> {
      console.log('lh_has_cls UPDATE CLOOOK');
      console.log(lh_has_cls);
      
      return this.http.put<Lh_hs_cls>(this.Lh_has_clsUrl, lh_has_cls, httpOptions);
    }


    

    deleteParticipantWshop(id: string): Observable<Participant_has_workshop> {
      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      const params = new HttpParams()
      .set('WorkshopId', id)
      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.delete<Participant_has_workshop>(this.Participant_has_workshopsUrl , options)
     return datawork;
    }

    deleteEquipmentWshop(id: string): Observable<Workshop_has_equipments> {
      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      const params = new HttpParams()
      .set('WorkshopId', id)
      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.delete<Workshop_has_equipments>(this.Workshop_has_equipmentsUrl , options)
     return datawork;
    }


    updateWorkshop(workshop: Workshop): Observable<Workshop> {
      return this.http.put<Workshop>(this.WorkshopUrl, workshop, httpOptions);
    }

    addParticipantWshop(participant_has_workshop: Participant_has_workshop): Observable<Participant_has_workshop> {
      return this.http.post<Participant_has_workshop>(this.Participant_has_workshopsUrl, participant_has_workshop, httpOptions);
    }

    addEquipmentWshop(workshop_has_equipments: Workshop_has_equipments): Observable<Workshop_has_equipments> {
      return this.http.post<Workshop_has_equipments>(this.Workshop_has_equipmentsUrl, workshop_has_equipments, httpOptions);
    }

    createCriticity(workshop_has_equipments: Workshop_has_equipments): Observable<Workshop_has_equipments> {
      console.log('workshop_has_equipments');
      console.log(workshop_has_equipments);
      return this.http.post<Workshop_has_equipments>(this.Lh_has_clsUrl, workshop_has_equipments, httpOptions);
    }

    deleteLh_has_clsWshop(id: string): Observable<Workshop_has_equipments> {
      let myHeaders = new  HttpHeaders();
      myHeaders.set('Content-Type', 'application/json');  
      const params = new HttpParams()
      .set('WorkshopId', id)
      let options = { params: params, headers: myHeaders };
      let datawork =  this.http.delete<Workshop_has_equipments>(this.Lh_has_clsUrl , options)
     return datawork;
    }


    /* addEquipment(workshop: Workshop): Observable<Workshop> {
      return this.http.post<Workshop>(this.WorkshopUrl, workshop, httpOptions);
    } */
    
    getWorkshopsId(id: number): Observable<Workshop> {
      const url = `${this.WorkshopUrl}/${id}`;
      return this.http.get<Workshop>(url);
    }

   /*  getParticipantsSelected(participant_ws: Participant_ws): Observable<Participant_has_workshop> {
      return this.http.get<Participant_has_workshop>(this.ParticipantWsUrl, httpOptions);
    } */


    addEquipment(equipment: EquipmentCrud): Observable<EquipmentCrud> {
      return this.http.post<EquipmentCrud>(this.EquipmentCrudUrl, equipment, httpOptions);
    }

    updateEquipment(equipment: EquipmentCrud): Observable<EquipmentCrud> {
      return this.http.put<EquipmentCrud>(this.EquipmentCrudUrl, equipment, httpOptions);
    }


    getEquipmentId(id: number): Observable<EquipmentCrud> {
      const url = `${this.equipmentsAllUrl}/${id}`;
      return this.http.get<EquipmentCrud>(url);
    }
  
  }

 