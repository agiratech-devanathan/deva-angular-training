import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 ph_no='';
dialcode=''
addUserForm:FormGroup;
userData=[];

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initilaForm();
    // this.getData();
  }

  initilaForm(){
    this.addUserForm=this.formBuilder.group({
      first_Name:['',[Validators.required]],
      last_Name:['',[Validators.required]],
      email_Address:['',[Validators.required]],
      phone_Number:['',[Validators.required]],
    });
  }
  onCountryChange(event){
    console.log(event)
    this.dialcode=event.dialCode
  }
  telInputObject(obj) {
    console.log(obj);
    this.dialcode=obj.s.dialCode
  }

  getNumber(event){
    this.ph_no=event
    console.log(event)
  }

saveData(){
 const addFormData={
  firstName:this.addUserForm.controls.first_Name.value,
  lastName:this.addUserForm.controls.last_Name.value,
  email:this.addUserForm.controls.email_Address.value,
  phoneNumber:this.dialcode+" "+this.addUserForm.controls.phone_Number.value,}
this.userData.push(addFormData)
console.log(this.userData)
localStorage.setItem('UserData',JSON.stringify(this.userData))
}

// private getData(){
// const viewData=JSON.parse(localStorage.getItem("UserData"));
// viewData.forEach(element => {
//   console.log(element.phoneNumber)
//   this.addUserForm.patchValue({
//     firstName:element.first_Name,
//     lastName:element.last_Name,
//     emailAddress:element.email_Address,
//     phoneNumber:element.phone_Number,
//   })
//   console.log(element.phoneNumber)
// });
// console.log(viewData[0].firstName)
// }

}
