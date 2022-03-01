import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PageComponentComponent } from './page-component/page-component.component';
import { AssessmentPageComponent } from './page-component/assessment-page/assessment-page.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PageComponentComponent,
    AssessmentPageComponent
  ],
  imports: [
 CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

  ]
})
export class PagesModule { }
