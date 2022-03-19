import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentPageComponent } from './component/assessment-page/assessment-page.component';
import { AssessmentResultComponent } from './component/assessment-result/assessment-result.component';
import { TakeHomeAssessmentComponent } from './component/take-home-assessment/take-home-assessment.component';
import { PageComponentComponent } from './page-component.component';

const routes: Routes = [{
  path: '',
  component:PageComponentComponent ,
  children: [
    {
      path: 'assessment-page',
      component: AssessmentPageComponent
    },

    {
      path: 'assessment-result',
      component: AssessmentResultComponent
    },

    {
      path: '',
      component: TakeHomeAssessmentComponent
    },
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageComponentRoutingModule { }
