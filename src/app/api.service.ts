import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }

getUsers(){
 return this.http.get("users")
}

signOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('Email')
this.router.navigate(['/login'])
}

}
