import { ChangeDetectorRef, Component, OnChanges, OnInit, } from '@angular/core';
import { ApiService } from 'src/app/Providers/http/api.service';

@Component({
  selector: 'app-assessment-result',
  templateUrl: './assessment-result.component.html',
  styleUrls: ['./assessment-result.component.scss']
})
export class AssessmentResultComponent implements OnInit {

  constructor(private api_Service:ApiService, private cdRef: ChangeDetectorRef) { }
  public assessRes = false;
  ngOnInit(): void {
    this.api_Service.myMethodSubject.subscribe(res=>{
      if(res){
        this.assessRes = true;
      }
      this.cdRef.detectChanges();
      this.cdRef.markForCheck();
      console.log(typeof(this.assessRes))
    })
  }

}
