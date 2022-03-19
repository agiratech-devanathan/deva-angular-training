import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponentComponent } from './modules/page-component/page-component.component';
import { AuthGuard } from './Providers/authGuard/auth.guard';



const routes: Routes = [
  {
    path:'',
    redirectTo:'assessment',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule),
  },

  {
    path: 'assessment',
    loadChildren: ()=> import('./modules/page-component/page-component.module').then(module=>module.PageComponentModule)
  },

 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
