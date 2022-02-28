import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Providers/http/api.service';
import { userListModel } from 'src/app/shared/sharedModel';

@Component({
  selector: 'appEdit-add-user',
  templateUrl: './addEdit-user.component.html',
  styleUrls: ['./addEdit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  ph_no = '';
  dialcode = ''
  addUserForm: FormGroup;
  userData = [];
  viewData = [];
  id:string;

  constructor(
    private formBuilder: FormBuilder,
     private router: Router,
     private activatedRoute:ActivatedRoute,
     private apiService:ApiService
     
     ) { }

  ngOnInit(): void {
    this.initilaForm();
    this.onUpdataData();
    this.getData();
    // this.apiService.onEditData(this.userData)

  }

  initilaForm() {
    this.addUserForm = this.formBuilder.group({
      // first_Name: ['', [Validators.required]],
      // last_Name: ['', [Validators.required]],
      // email_Address: ['', [Validators.required]],
      phone_Number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  onCountryChange(event) {
    console.log(event)
    this.dialcode = event.dialCode
  }
  telInputObject(obj) {
    console.log(obj);
    this.dialcode = obj.s.dialCode
  }

 

  saveData() {
  
    
    if(this.userData.length>0){
console.log("hello")
    }
    else{
      console.log("hi")
      const addFormData= {
        // firstName: this.addUserForm.controls.first_Name.value,
        // lastName: this.addUserForm.controls.last_Name.value,
        // email: this.addUserForm.controls.email_Address.value,
        phone_Number: '+' + this.dialcode + " " + this.addUserForm.controls.phone_Number.value,
      }
      this.apiService.onPostData(addFormData)
      console.log(addFormData)
    
    }
    this.router.navigate(['home/userList']) 
  }

onUpdataData(){
  console.log(this.userData)
 
}

modifyData(){
  const payload={
    phone_Number:this.addUserForm.controls.phone_Number.value
  }
  console.log(payload)
  return payload
}
getData(){
  this.apiService.onFetchData().subscribe(res=>{
    for(const key in res){
      if(res.hasOwnProperty(key)){
        this.userData.push({...res[key],id:key})
    }
    }
    console.log(this.userData)
  })
}
//  getDataFromUrl(){
//    this.activatedRoute.queryParams.subscribe(
//      param=>{
//        console.log(param)
//      }
//    )
//  }

close(){
  this.router.navigate(['home/userList'])
}

}
