import { MatSnackBar } from '@angular/material/snack-bar';
import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss']
})
export class AllDoctorsComponent implements OnInit {

  constructor(private doctorService: DoctorService,
    private snackbar: MatSnackBar) { }

  doctors: Array<any> = [];
  show: boolean = false;
  displayedColumns: string[] = [
    'index', 'name', 'email', 'mobile', 'specialisation', 
    'qualification', 'experience', 'address', 'actions'
  ]

  ngOnInit(): void {
    this.doctorService.getAllDoctors()
    .subscribe((data: any) => {
      this.show = true;
      console.log(data)
      this.doctors = data;
    })
  }
  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  deleteDoctor(id: any) {
    this.doctorService.deleteDoctor(id)
    .subscribe((data: any) => {
      this.openSnackbar("Doctor deleted successfully", '')
      this.ngOnInit();
    })
  }

}
