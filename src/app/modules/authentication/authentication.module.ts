import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonSharedModule } from 'src/app/shared/common-shared/common-shared.module';
import { AuthenticationComponent } from './authentication.component';




@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    CommonSharedModule,
  ]
})
export class AuthenticationModule { }
