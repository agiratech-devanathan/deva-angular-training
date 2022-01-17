import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.signInBuildForm();
  }

  signInBuildForm(){
    this.signInForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
onSignIn(){
  if(this.signInForm.valid){
    this.router.navigate(['/home'])
    console.log("dashboard shown")
  }

  console.log("derror")
  
}
}
