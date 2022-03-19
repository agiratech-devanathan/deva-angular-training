import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Providers/http/api.service';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})
export class AssessmentPageComponent implements OnInit {

 assessmentForm:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private api_Serivice:ApiService) { }
 finalRes;
  ngOnInit(): void {
    this.assessmentBuildForm()
  }
  assessmentBuildForm() {
    this.assessmentForm = this.formBuilder.group({
      Fahrenheat_or_Celcius:[''],
     age:[''],
      assessRadio1:[null],
        assessRadio2:[null],
        assessRadio3:[null],
        assessRadio4:[null],
        assessRadio5:[null],
        assessRadio6:[null],
        assessRadio7:[null],
        assessRadio8:[null]
    })
  }
  
  takeResult(){
    this.router.navigate(['assessment/assessment-result'])
    const result=[];
    result.push(
      this.assessmentForm.controls.assessRadio1.value,
      this.assessmentForm.controls.assessRadio2.value,
      this.assessmentForm.controls.assessRadio3.value,
      this.assessmentForm.controls.assessRadio4.value,
      this.assessmentForm.controls.assessRadio5.value,
      this.assessmentForm.controls.assessRadio6.value,
      this.assessmentForm.controls.assessRadio7.value,
      this.assessmentForm.controls.assessRadio8.value,
      )
    const numRes=result.map(Number)
    let sum=0;
    numRes.forEach((res)=>{
      sum+=res;
    })
    this.finalRes=sum
    //if(sum==8){
    // console.log("High risk")
    //     }
    //     else if(sum>=4 && sum<8){
    //       console.log("Medium Risk")
    //     }
    //     else if(sum<4){
    //       console.log('low risk')
    // }
    this.api_Serivice.myMethodSubject.next(this.finalRes)
 }
}
