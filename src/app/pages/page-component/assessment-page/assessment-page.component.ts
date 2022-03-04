import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.scss']
})
export class AssessmentPageComponent implements OnInit {
  assessmentForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }
 
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
      assessRadio7:[null]
    })
  }
  
  takeResult(){
    const result=[];
    result.push(
      this.assessmentForm.controls.assessRadio1.value,
      this.assessmentForm.controls.assessRadio2.value,
      this.assessmentForm.controls.assessRadio3.value,
      this.assessmentForm.controls.assessRadio4.value,
      this.assessmentForm.controls.assessRadio5.value,
      this.assessmentForm.controls.assessRadio6.value,
      this.assessmentForm.controls.assessRadio7.value)
    const numRes=[]=result.map(Number)
    console.log(numRes)
    console.log(result)
    let c=0;
    for(let i=1;i<=numRes.length;i++){
        c +=numRes[i];
       
    }
    console.log(c)
    console.log(typeof(c))
    if(c==7){
console.log("High risk")
    }
    else if(c>=3 && c<7){
      console.log("Medium Risk")
    }
    else if(c<3){
      console.log('low risk')
    }

  }


}
