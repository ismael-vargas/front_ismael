import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
//import { ButtonModule } from 'primeng/button';
//import {PasswordModule} from 'primeng/password'
import { PrimengModule } from '../primeng/primeng.module';
import { MessageService } from 'primeng/api';  // Asegúrate de importar MessageService


@NgModule({

  providers:[
    AuthService,
    MessageService
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //ButtonModule,
    //PasswordModule,
    PrimengModule
  ]
})
export class AuthModule { }
