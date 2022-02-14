import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../http/authenctication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthService){}

  canActivate(): boolean {
      if(this.authService.verifyUser()){
        return true;
      }

      else{
        this.router.navigate(['/login'])
        return false;
      }
     
  }
  
}

export interface ComponentDeactivate{
canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthDeactivateGuard implements CanDeactivate< ComponentDeactivate> {
  canDeactivate(component: ComponentDeactivate): any {
     return component && component.canDeactivate?component.canDeactivate():true;
  }
  
}
