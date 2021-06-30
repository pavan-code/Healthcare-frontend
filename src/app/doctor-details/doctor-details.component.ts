import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute) { }

  pending: Array<any> = [];
  approved: Array<any> = [];
  doctorId: any = 0;
  show: boolean = false;
  displayedColumns: string[] = [
    'index', 'name', 'date', 'time', 'status'
  ]
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.paramMap.get('id');
    
    this.doctorService.appointmentRequests(this.doctorId)
    .subscribe((data: any) => {
      this.show = true
      this.pending = data;
      // console.log(this.pending);  
      this.doctorService.approvedAppointments(this.doctorId)
      .subscribe((data: any) => {
        this.approved = data;
        // console.log(this.approved)
      })
    })
    
  }

}
