import { Component, Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Login } from '../models/login';
import { ClientService } from '../services/authentication.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {Globals} from '../../globals/globals'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

@Injectable()
export class LoginComponent  {

  private client: number;
  private username: string;

  constructor(private ClientService: ClientService,private router: Router,private globals: Globals) {

    this.client = globals.client; 

    this.username = globals.username; 

  }

  role: string = 'test';


  loginform = true;
  recoverform = false;

  model = new Login();
  submitted = false;


  clients: Client[];

   /*  clientForm: FormGroup;*/

  showRecoverForm() {
  	this.loginform = !this.loginform;
  	this.recoverform = !this.recoverform;
  }
  ngOnInit(): void {
    this.getClients ();
 }

 onSubmit(f: NgForm) {
  console.log(f.value);  // { data}
  this.getValidateUser(f.value);

  this.role =  'USUARIO';  
  this.client = f.value.client;
  this.username = f.value.username;

  this.globals.client = f.value.client;
  this.globals.username = f.value.username;

  console.log('login.component');  //
  console.log(this.role);  //
  console.log(this.client);  //
  console.log(this.username);  //


 }

 getValidateUser(data){

//return this.

this.router.navigateByUrl('forms/formworkshop');

 }

 getClients() {
  return this.ClientService.getClients()
             .subscribe(
               clients => {
                console.log(clients);
                this.clients = clients
               }
              );
  }

}
