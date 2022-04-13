import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
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
  isLoggedIn=false;
  signUpcred = [];

public user:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: SocialAuthService
  ) { }

  ngOnInit(): void {
    this.signInBuildForm();
  this.authService.authState.subscribe((data)=>{
    this.user=data;
    this.isLoggedIn=data!=null
  })

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
    this.isLoggedIn=true;
    this.signUpcred.push(JSON.parse(localStorage.getItem("signupCred")))
    console.log(typeof(this.signUpcred))
    this.signUpcred.forEach((element, index) => {
      console.log(typeof(element))
      if (this.signInForm.controls.userName.value == element.email && this.signInForm.controls.password.value == element.password) {
        this.token = this.signInForm.controls.userName.value.split('@').reverse()[1]
        localStorage.setItem("token", JSON.stringify(this.token))
     localStorage.setItem('isLoggedIn',JSON.stringify(this.isLoggedIn))

        if (localStorage.getItem('token')) {
          this.router.navigate(['/assessment'])
        }
        console.log("both are crt")
      }
      else {
        this.router.navigate(['./sign-in'])
        console.log("both are wrong")
      }

    })
  }

  signInHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigate(['/assessment']).then();
    });
  }


  signInFace(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }
}


