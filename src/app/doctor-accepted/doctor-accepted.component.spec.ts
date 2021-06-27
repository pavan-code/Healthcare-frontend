import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAcceptedComponent } from './doctor-accepted.component';

describe('DoctorAcceptedComponent', () => {
  let component: DoctorAcceptedComponent;
  let fixture: ComponentFixture<DoctorAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
