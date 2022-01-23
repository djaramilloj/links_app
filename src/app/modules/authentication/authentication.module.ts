import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ComponentsModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
