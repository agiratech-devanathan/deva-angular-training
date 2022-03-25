import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, } from '@angular/core';
import { ApiService } from 'src/app/Providers/http/api.service';

@Component({
  selector: 'app-assessment-result',
  templateUrl: './assessment-result.component.html',
  styleUrls: ['./assessment-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssessmentResultComponent implements OnInit {

  constructor(private api_Service:ApiService, private cdf: ChangeDetectorRef) { }
  public assessmentRes;
  ngOnInit(): void {
   
    this.assessmentRes=localStorage.getItem("assessmentRes")
    console.log(this.assessmentRes)
  }

}
