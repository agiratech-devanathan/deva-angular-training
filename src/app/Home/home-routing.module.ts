import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDeactivateGuard } from '../Providers/authGuard/auth.guard';
import { AddUserComponent } from './home/add-user/add-user.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './home/user-list/user-list.component';

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
        component: AddUserComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }