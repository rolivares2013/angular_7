import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Businessinformation } from "../models/businessinformation";
import {AppConstants} from '../../constants/constant'


//import { delay } from "rxjs/operators";
/**
 * A server used to mock a paged data result from a server
 */

@Injectable({
    providedIn: 'root'
  })

export class BusinessinformationsService {

    _baseURL = AppConstants.baseURL;

    private BusinessinformationUrl = this._baseURL + '/businessinformationsXEQP';  // URL to web api

    constructor( 
        private http: HttpClient
      ) { }
    

      businessinformationsXEQP (id:string): Observable<Businessinformation> {

        let headers = new  HttpHeaders();
        headers.set('Content-Type', 'application/json');  
  
        const params = new HttpParams()
        .set('EquipmentId', id)

  
        let options = { params: params, headers: headers };
        let datawork =  this.http.get<Businessinformation>(this.BusinessinformationUrl , options)
  
       console.log('datawork:' + JSON.stringify(datawork));
       console.log(datawork);
       return datawork;
      }

}