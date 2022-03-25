import { JsonPipe } from '@angular/common';
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
  public emailId;
  public tokenId;
  public email;
  public token;
  signUpcred = [];


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
    this.validateCred()
  }

  validateCred() {
    this.signUpcred.push(JSON.parse(localStorage.getItem("signupCred")))
    this.signUpcred.forEach((element, index) => {
      console.log(element)
      console.log(element[index].email)
      console.log(element[index].password)
      console.log(this.signInForm.controls.password.value)
      if (this.signInForm.controls.userName.value == element[index].email && this.signInForm.controls.password.value == element.password) {
        this.token = this.signInForm.controls.userName.value.split('@').reverse()[1]
        localStorage.setItem("token", JSON.stringify(this.token))
     

        if (localStorage.getItem('token')) {
          this.router.navigate(['/assessment'])
        }
        console.log("both are crt")
      }
      else {
        this.router.navigate(['..sign-in/'])
        console.log("both are wrong")
      }

    })
  }
}
