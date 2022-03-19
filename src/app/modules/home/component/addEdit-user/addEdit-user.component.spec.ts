import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserComponent } from './addEdit-user.component';

describe('AddUserComponent', () => {
  let component: AddEditUserComponent;
  let fixture: ComponentFixture< AddEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( AddEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
