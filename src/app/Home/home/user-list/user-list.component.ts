import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersList;
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.fetchUser()
  }

  fetchUser(){
    this.apiService.getUsers().subscribe(res=>this.usersList=res)
  }
}
