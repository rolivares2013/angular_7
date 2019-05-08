import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Equipment } from "../models/equipment";
import {AppConstants} from '../../constants/constant'
import {Lh_hs_cls} from '../models/lh_hs_cls' 

//import { delay } from "rxjs/operators";
/**
 * A server used to mock a paged data result from a server
 */

@Injectable({
    providedIn: 'root'
  })

export class EquipmentService {

    _baseURL = AppConstants.baseURL;

    private EquipmentUrl = this._baseURL + '/equipmentsXWS';  // URL to web api
    private EquipmentByIdUrl = this._baseURL + '/equipments';  // URL to web api

    private Lh_hs_clsUrl = this._baseURL + '/lh_hs_clsEqp';  // URL to web api

    constructor( 
        private http: HttpClient
      ) { }
    

      getEquipmentXClient (id:string): Observable<Equipment> {

        let headers = new  HttpHeaders();
        headers.set('Content-Type', 'application/json');  
  
        const params = new HttpParams()
        .set('WorkShopId', id)

  
        let options = { params: params, headers: headers };
        let datawork =  this.http.get<Equipment>(this.EquipmentUrl , options)
  
       console.log('datawork:' + JSON.stringify(datawork));
       console.log(datawork);
       return datawork;
      }

      getEquipmentById(id: number): Observable<Equipment> {
        const url = `${this.EquipmentByIdUrl}/${id}`;
        return this.http.get<Equipment>(url);
      }
    
     


      getCriticalityEqp (ide:string,idw:string): Observable<Lh_hs_cls> {

        let headers = new  HttpHeaders();
        headers.set('Content-Type', 'application/json');  
  
        const params = new HttpParams()
        .set('WorkshopId', idw)
        .set('EquipmentId', ide)

  
        let options = { params: params, headers: headers };
        let datawork =  this.http.get<Lh_hs_cls>(this.Lh_hs_clsUrl , options)
  
       console.log('getCriticalityEqp:' + JSON.stringify(datawork));
       console.log(datawork);
       return datawork;
      }

}