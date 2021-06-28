import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }
  specialisations: string[] = [
    'Cardiology', 'Nephrology', 'Neurology', 'Family medicine', 'Orthopaedic', 'Pediatrics', 
    'ENT Specialist', 'Oncology', 'Dermatology', 'Optomology', 'Pulmonology'
  ];
  ngOnInit(): void {
  }

}
