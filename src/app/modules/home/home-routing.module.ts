import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDeactivateGuard } from '../../Providers/authGuard/auth.guard';
import { AddEditUserComponent } from './component/addEdit-user/addEdit-user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
    {
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
        // canDeactivate: [AuthDeactivateGuard]

    },
    {
        path: 'userList/addUser',
        component: AddEditUserComponent,
    },
    {
        path: 'addUser',
        component: AddEditUserComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }