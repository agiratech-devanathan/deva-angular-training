import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/Providers/http/api.service';
import { userListModel } from 'src/app/shared/sharedModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  usersListData:userListModel[]=[];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.usersListData)
    this.fetchUser()
  }

  private fetchUser() {
    this.onGetData()
  }

  seeData(data) {
    console.log(data)
  }
  updateData(data) {
    console.log(data)
    this.router.navigate(['/addUser'])
  }
  removeData(data) {
    console.log(data)
  }
  canDeactivate() {
    return new Promise((resolve, reject) => {
      resolve(confirm("Do you want to go back..."));
    });
  }

  onGetData(){
    this.apiService.onFetchData().subscribe(resData=>{
      this.usersListData=resData;
      console.log(this.usersListData)
 })
 }

}
