import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  newCred = [];
  ngOnInit(): void {
    this.forgotPasswordBuildForm();

  }

  getpass() {

  }

  forgotPasswordBuildForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  changePassword() {
    if (this.forgotPasswordForm.controls.newPassword.value == this.forgotPasswordForm.controls.confirmPassword.value) {
      this.newCred.push(JSON.parse(localStorage.getItem("signupCred")))
      this.newCred.forEach((element) => {
        element.password = this.forgotPasswordForm.controls.confirmPassword.value
        console.log(element.password)
        localStorage.setItem("signupCred", JSON.stringify(this.newCred))
      })
      console.log(this.newCred)
    }
    else {
      console.log("Not matched")
    }
    console.log(this.forgotPasswordForm.controls.newPassword.value)
    console.log(this.forgotPasswordForm.controls.confirmPassword.value)
  }
}
