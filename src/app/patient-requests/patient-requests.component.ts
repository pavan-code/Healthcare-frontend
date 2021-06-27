import { PatientService } from './../services/patient.service';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-patient-requests',
  templateUrl: './patient-requests.component.html',
  styleUrls: ['./patient-requests.component.scss']
})
export class PatientRequestsComponent implements OnInit {
  scrWidth: number = 0;
  cols: number = 0;

  constructor(private patientService: PatientService,
    @Inject(DOCUMENT) private document: Document) {
      this.getScreenSize();
     }
  pendingAppointments: any;
  patientId: number = 0;
  show: boolean = false;

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

    this.patientService.getPendingAppointments(this.patientId)
    .subscribe((data: any) => {
      this.show = true;
      console.log(data)
      this.pendingAppointments = data;
    })
  }

}
