import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignInComponent } from './login-component/sign-in/sign-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './login-component/sign-up/sign-up.component';



@NgModule({
  declarations: [LoginComponentComponent, SignInComponent,SignUpComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    
  ]
})
export class LoginModule { }
