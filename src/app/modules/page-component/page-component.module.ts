import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponentComponent } from './page-component.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from 'src/app/shared/common-shared/common-shared.module';
import { AssessmentPageComponent } from './component/assessment-page/assessment-page.component';
import { AssessmentResultComponent } from './component/assessment-result/assessment-result.component';
import { TakeHomeAssessmentComponent } from './component/take-home-assessment/take-home-assessment.component';
import { PageComponentRoutingModule } from './page-component-routing.module';
import { ApiService } from 'src/app/Providers/http/api.service';



@NgModule({
  declarations: [
    PageComponentComponent,
    AssessmentPageComponent,
    AssessmentResultComponent,
    TakeHomeAssessmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonSharedModule,
    FormsModule,
    PageComponentRoutingModule
  ],

})
export class PageComponentModule { }
