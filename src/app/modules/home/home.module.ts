import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../../shared/material/material.module';

import { ApiService } from '../../Providers/http/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './component/user-list/user-list.component';
// import { InterceptorService } from '../Providers/Interceptor/interceptor.service';
import { AddEditUserComponent} from './component/addEdit-user/addEdit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { CommonSharedModule } from 'src/app/shared/common-shared/common-shared.module';


@NgModule({
  declarations: [
    HomeComponent,
     DashboardComponent,
     UserListComponent,
     AddEditUserComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    Ng2TelInputModule,
    DirectivesModule,
    CommonSharedModule
   
    
  ],
  providers:[ApiService,
    // {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ]
})
export class HomeModule { }
