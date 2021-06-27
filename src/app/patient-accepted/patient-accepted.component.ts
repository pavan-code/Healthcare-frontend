import { PatientService } from './../services/patient.service';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-patient-accepted',
  templateUrl: './patient-accepted.component.html',
  styleUrls: ['./patient-accepted.component.scss']
})
export class PatientAcceptedComponent implements OnInit {
  patientId: any;
  approvedAppointments: any;
  show: boolean = false;
  scrWidth: number = 0;
  cols: number = 0;

  constructor(private patientService: PatientService,
    @Inject(DOCUMENT) private document: Document) {
      this.getScreenSize();

     }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: undefined) {
    this.scrWidth = window.innerWidth;
    
    if(this.scrWidth <= 768) {
      this.cols = 1;
    }
    else {
     this.cols = 3;
    }
  }
  ngOnInit(): void {

    this.patientId = JSON.parse(localStorage.getItem('patient') || '{}').id;

    this.patientService.getApprovedAppointments(this.patientId)
    .subscribe((data: any) => {
      this.show = true;
      console.log(data)
      this.approvedAppointments = data;
    })
  }

}
