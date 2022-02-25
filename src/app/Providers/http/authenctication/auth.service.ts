import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  verifyUser(){
    return !! localStorage.getItem('token')
  }

  getToken(){
  return localStorage.getItem('token')
}
}
