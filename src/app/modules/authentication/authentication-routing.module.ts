import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
    {
        path:'',
        component:AuthenticationComponent,
        children:[ 
             {
                path:'sign-in',
                component:SignInComponent,
    
            },
            {
                path:'sign-up',
                component:SignUpComponent
            },
            {
                path:'forgot-password',
                component:ForgotPasswordComponent
            }
        ]
    
  
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }