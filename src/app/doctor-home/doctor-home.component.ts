import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent implements OnInit {
  scroll: number = 0;

  constructor() { }
  specialisations: string[] = [
    'Cardiology', 'Nephrology', 'Neurology', 'Family medicine', 'Orthopaedic', 'Pediatrics', 
    'ENT Specialist', 'Oncology', 'Dermatology', 'Optomology', 'Pulmonology'
  ];

  ngOnInit(): void {
  }
  stop() {
    this.scroll = 0;
  }
  start() {
    this.scroll = 15;
  }
}
