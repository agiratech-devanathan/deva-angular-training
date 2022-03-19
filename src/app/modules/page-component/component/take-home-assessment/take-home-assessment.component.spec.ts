import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeHomeAssessmentComponent } from './take-home-assessment.component';

describe('TakeHomeAssessmentComponent', () => {
  let component: TakeHomeAssessmentComponent;
  let fixture: ComponentFixture<TakeHomeAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeHomeAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeHomeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
