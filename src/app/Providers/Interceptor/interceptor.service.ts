
// import { Injectable, Injector } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap} from 'rxjs/operators'
// import { AuthService } from '../http/authenctication/auth.service';


// @Injectable()
// export class InterceptorService implements HttpInterceptor {

//   constructor(private injector:Injector) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler):
//   Observable<HttpEvent<any>> {
//     let authService=this.injector.get(AuthService)
//     console.log("Interceptors",req)
//     const newReq=req.clone({url:"https://jsonplaceholder.typicode.com/"+req.url,
//     setHeaders:{Authoraization:`Bearer ${authService.getToken()}`}});
//   return next.handle(newReq).pipe(tap((result)=>{
// console.log("Suucessfully",result)
//   },(error)=>{
// console.log("Error:",error)
//   }))
// }
 
// }


