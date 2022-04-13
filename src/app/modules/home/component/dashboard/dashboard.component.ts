import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Providers/http/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  public userDetails:any;

  constructor(
    private router: Router
  ) {
  }

// logout(){
//   this.apiService.signOut()
//   console.log("Logged out")
// }

ngOnInit(): void {
  const storage = localStorage.getItem('google_auth');

  if (storage) {
    this.userDetails = JSON.parse(storage);
  } else {
    this.signOut();
  }
}

signOut(): void {
  localStorage.removeItem('google_auth');
  this.router.navigateByUrl('/login').then();
}

}

