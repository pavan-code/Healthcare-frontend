import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-requests',
  templateUrl: './doctor-requests.component.html',
  styleUrls: ['./doctor-requests.component.scss']
})
export class DoctorRequestsComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private snackbar: MatSnackBar) { }

  appRequests: Array<any> = [];
  doctorId: number = 0;
  show: boolean = false;
  displayedColumns: string[] = [
    'index', 'name', 'date', 'time', 'actions'
  ]
  ngOnInit(): void {
    this.doctorId = JSON.parse(localStorage.getItem('doctor') || '{}').id;
    this.appRequests = []
    this.doctorService.appointmentRequests(this.doctorId)
    .subscribe((data: any) => {      
      this.show = true;      
      // console.log(data);
      let n = data.length;
      for(var i=0; i<n; i++) {
        if(data[i].status != 'false')
          this.appRequests.push(data[i])
      }
    })

  }
  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  reject(i: number) {
    let rejected = this.appRequests[i];
    rejected.status = "false";
    // console.log(rejected);
    this.doctorService.rejectAppointment(rejected)
    .subscribe((data: any) => {
      // console.log(data)
      this.openSnackbar(data.message, '')
      setTimeout(() => {
        location.reload();
      }, 2500);
    })
  }

  accept(i: number) {
    let accepted = this.appRequests[i];
    accepted.status = "true";
    // console.log(accepted);
    this.doctorService.acceptAppointment(accepted)
    .subscribe((data: any) => {
      // console.log(data)
      this.doctorService.deleteAppointment(data)
      .subscribe((data: any) => {
        // console.log(data)
        this.openSnackbar(data.message, '')
         setTimeout(() => {
         location.reload();
      }, 2500);
      })
    })
  }

}
