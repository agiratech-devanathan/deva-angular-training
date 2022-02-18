import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userListModel } from 'src/app/shared/sharedModel';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private router:Router) { }


onPostData(userList:userListModel){
  this.http.post('https://anguartraining-default-rtdb.firebaseio.com/userList.json',userList).subscribe(postRes=>{
    console.log(postRes)
  })
}

onFetchData(){
  return this.http.get<{[key:string]:userListModel}>('https://anguartraining-default-rtdb.firebaseio.com/userList.json')
   .pipe(map(responseData=>{
    
       const userListArr:userListModel[]=[];
       for(const key in responseData){
           if(responseData.hasOwnProperty(key)){
               userListArr.push({...responseData[key],id:key})
           }
       }
       console.log(userListArr)
       return userListArr;
   })
   )
 }

 onEditData(){
   
 }

signOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('Email')
this.router.navigate(['/login'])
}

}
