import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { User } from '../models/user';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class ClientService {
    private clientsUrl = 'http://localhost:8080/api/clients';  // URL to web api
    private userUrl = 'http://localhost:8080/api/user';  // URL to web api
    constructor( 
      private http: HttpClient
    ) { }
  
    getClients (): Observable<Client[]> {
      return this.http.get<Client[]>(this.clientsUrl)
    }

    getValidateUser (user: User): Observable<any> {
      return this.http.get<User[]>(this.clientsUrl)
     
    }
  
  
    /* getCustomer(id: number): Observable<Customer> {
      const url = `${this.customersUrl}/${id}`;
      return this.http.get<Customer>(url);
    }
  
    addCustomer (customer: Customer): Observable<Customer> {
      return this.http.post<Customer>(this.customersUrl, customer, httpOptions);
    }
  
    deleteCustomer (customer: Customer | number): Observable<Customer> {
      const id = typeof customer === 'number' ? customer : customer.id;
      const url = `${this.customersUrl}/${id}`;
  
      return this.http.delete<Customer>(url, httpOptions);
    }
  
    updateCustomer (customer: Customer): Observable<any> {
      return this.http.put(this.customersUrl, customer, httpOptions);
    } */
  }