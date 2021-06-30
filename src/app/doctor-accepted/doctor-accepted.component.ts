import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-accepted',
  templateUrl: './doctor-accepted.component.html',
  styleUrls: ['./doctor-accepted.component.scss']
})
export class DoctorAcceptedComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  approved: Array<any> = [];
  displayedColumns: string[] = [
    'index', 'name', 'date', 'time', 
  ]
  show: boolean = false;


  ngOnInit(): void {
    let doctorId = JSON.parse(localStorage.getItem('doctor') || '{}').id
    this.doctorService.approvedAppointments(doctorId)
    .subscribe((data: any) => {
      this.show = true;      
      this.approved = data;
      // console.log(this.approved)
    })
  }

}
