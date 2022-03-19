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
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService

  ) { }

  ngOnInit(): void {
    this.initilaForm();

    this.getData();
  }
  initilaForm() {
    this.addUserForm = this.formBuilder.group({
      phone_Number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }
  onCountryChange(event) {
    
    this.dialcode = event.dialCode
  }
  telInputObject(obj) {
    
    this.dialcode = obj.s.dialCode
  }
  saveData() {
    if (this.userData.length > 0) {
      
    }
    else {
   
      const addFormData = {
        phone_Number: '+' + this.dialcode + " " + this.addUserForm.controls.phone_Number.value,
      }
      this.apiService.onPostData(addFormData)
      
    }
    this.router.navigate(['home/userList'])
  }
  
  modifyData() {
    const payload = {
      phone_Number: this.addUserForm.controls.phone_Number.value
    }

    return payload
  }
  getData() {
    this.apiService.onFetchData().subscribe(res => {
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          this.userData.push({ ...res[key], id: key })
        }
      }
      
    })
  }
  close() {
    this.router.navigate(['home/userList'])
  }

}
