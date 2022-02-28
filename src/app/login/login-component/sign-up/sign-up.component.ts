import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.signUpBuildForm()
  }

  signUpBuildForm() {
    this.signUpForm = this.formBuilder.group({
     firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSignUp(){
    const signUpCredData= {
      firstName: this.signUpForm.controls.firstName.value,
      lastName: this.signUpForm.controls.lastName.value,
      email: this.signUpForm.controls.email.value,
      password:this.signUpForm.controls.password.value,
    }
    localStorage.setItem("signupCred",JSON.stringify(signUpCredData))
    console.log(signUpCredData)
    this.router.navigate(['/home'])
  }
}
