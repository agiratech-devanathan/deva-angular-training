import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userListModel } from 'src/app/shared/sharedModel';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router,private activatedRoute:ActivatedRoute) { }
  userListArr:userListModel[]=[];

onPostData(userList:userListModel){
  this.http.post('https://anguartraining-default-rtdb.firebaseio.com/userList.json',userList).subscribe(postRes=>{
    console.log(postRes)
  })
}

onFetchData(){
  return this.http.get<{[key:string]:userListModel}>('https://anguartraining-default-rtdb.firebaseio.com/userList.json')
   .pipe(map(responseData=>{
       for(const key in responseData){
           if(responseData.hasOwnProperty(key)){
               this.userListArr.push({...responseData[key],id:key})
           }
       }
       console.log(this.userListArr)
       return this.userListArr;
   })
   )
 }

//  onEditData(data){
//    this.userdata.push(data)
//   // this.activatedRoute.queryParams.subscribe((params)=>{
//   //   console.log(params)
//   //  data.id=params['id'];
//    console.log(this.userdata)
//    const index=this.userdata.map(x=>x.id).indexOf(data);
//    console.log(index)

//   // this.apiService.onFetchData().subscribe(resData=>{
//   //   for(let i=0; i<resData.length;i++){
//   //     if(resData[i].id==this.id){
//   //       console.log(resData[i].phone_Number)
//   //       this.addUserForm.setValue({phone_Number:resData[i].phone_Number ? resData[i].phone_Number.split(' ').reverse()[0]:''})
//   //     }
//   //   }
//   // })
//   //  });
//  }

signOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('Email')
this.router.navigate(['/login'])
}

}
