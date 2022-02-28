import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignInComponent } from './login-component/sign-in/sign-in.component';
import { SignUpComponent } from './login-component/sign-up/sign-up.component';


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
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
