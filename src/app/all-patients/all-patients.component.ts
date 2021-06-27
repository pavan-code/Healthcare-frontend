import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';

export interface Patient {
  id: number;
  name: string;
  email: string;
  mobile: string;
  guardianName: string;
  dob: Date;
  address: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
}
@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  displayedColumns: string[] = [
    'index', 'name', 'email', 'mobile', 'guardianName', 'dob',
     'address'
  ]
  show: boolean = false;
  patients: Patient[] = [];

  ngOnInit(): void {
    this.patientService.getAllPatients()
    .subscribe((data: any) => {
      this.show = true;
      this.patients = data;
      console.log(this.patients)
    }, err => {      
      console.log(err)
      // alert('error in getting all patients data'+ err)
    })
  }

}
