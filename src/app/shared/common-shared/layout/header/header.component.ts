import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isLoggedIn;
  constructor(private router:Router) { }

  ngOnInit(): void {
this.isLoggedIn=JSON.parse(localStorage.getItem('isLoggedIn'))
  }


  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    this.router.navigate(['./assessment'])
    
  }
}
