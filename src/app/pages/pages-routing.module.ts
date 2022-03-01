import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentPageComponent } from './page-component/assessment-page/assessment-page.component';
import { PageComponentComponent } from './page-component/page-component.component';

const routes: Routes = [
    {
      path:'',
      component:PageComponentComponent,
       children:[
        {
          path:'assessmemt-page',
          component:AssessmentPageComponent
        }
      ]
  },
 
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
