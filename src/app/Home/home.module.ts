import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { ApiService } from '../api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './home/user-list/user-list.component';
import { InterceptorService } from '../Providers/Interceptor/interceptor.service';
import { AddUserComponent } from './home/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Ng2TelInputModule} from 'ng2-tel-input';


@NgModule({
  declarations: [
    HomeComponent,
     DashboardComponent,
     UserListComponent,
     AddUserComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    Ng2TelInputModule
    
  ],
  providers:[ApiService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class HomeModule { }
