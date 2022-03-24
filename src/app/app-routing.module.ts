import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




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

  {
    path:'authentication',
    loadChildren:()=> import('./modules/authentication/authentication.module').then(module=>module.AuthenticationModule)
  }

 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
