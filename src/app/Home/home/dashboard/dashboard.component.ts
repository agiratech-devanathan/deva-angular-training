import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  ngOnInit() {
 
  }
  constructor(private apiService:ApiService) {}

logout(){
  this.apiService.signOut()
  console.log("Logged out")
}

}
