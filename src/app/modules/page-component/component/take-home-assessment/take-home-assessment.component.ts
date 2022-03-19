import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-home-assessment',
  templateUrl: './take-home-assessment.component.html',
  styleUrls: ['./take-home-assessment.component.scss']
})
export class TakeHomeAssessmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
goto(){
  this.router.navigate(['assessment/assessment-page'])
}
 
}
