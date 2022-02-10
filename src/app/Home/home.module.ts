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


@NgModule({
  declarations: [HomeComponent, DashboardComponent,UserListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers:[ApiService,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}]
})
export class HomeModule { }
