import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './home/user-list/user-list.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
           
        },
    ], 
},
    {
        path: 'userList',
        component: UserListComponent,
    
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }