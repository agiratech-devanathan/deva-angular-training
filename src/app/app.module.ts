import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { LoginComponentComponent } from './login/login-component/login-component.component';
// import { SignInComponent } from './login/login-component/sign-in/sign-in.component';
import { MaterialModule } from './material/material.module';
// import { HomeComponent } from './Home/home/home.component';
// import { DashboardComponent } from './Home/home/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponentComponent,
    // SignInComponent,
    // HomeComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
