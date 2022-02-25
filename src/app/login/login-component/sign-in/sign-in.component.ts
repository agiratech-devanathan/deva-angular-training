import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  public emailId ;
    public tokenId;
    public email;
    public token;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInBuildForm();
  }

  signInBuildForm() {
    this.signInForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignIn() {
 this.email =this.signInForm.controls.userName.value;
 this.token=this.email.split('@').reverse()[1]
 localStorage.setItem("token",JSON.stringify(this.token))
 localStorage.setItem("Email",JSON.stringify(this.email))
 if (this.signInForm.valid) {
  this.router.navigate(['/home'])
  console.log("dashboard shown")
}


  }


}
