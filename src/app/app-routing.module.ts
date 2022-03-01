import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Providers/authGuard/auth.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then(module => module.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'assessment',
    loadChildren: ()=> import('./pages/pages.module').then(module=>module.PagesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
