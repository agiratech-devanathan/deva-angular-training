import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignInComponent } from './login-component/sign-in/sign-in.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponentComponent,
        children: [
            {
                path: 'sign-In',
                component: SignInComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
