import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAcceptedComponent } from './patient-accepted.component';

describe('PatientAcceptedComponent', () => {
  let component: PatientAcceptedComponent;
  let fixture: ComponentFixture<PatientAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
