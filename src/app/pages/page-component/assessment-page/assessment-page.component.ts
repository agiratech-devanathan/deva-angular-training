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
      Fahrenheat_or_Celcius:['',[Validators.required]],
      age:['',[Validators.required]],
      assessRadio:[null,[Validators.required]]
    })
  }
  



}
