import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from './../services/patient.service';
import { DoctorService } from './../services/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private doctorService: DoctorService, private patientService: PatientService,
            private snackbar: MatSnackBar) { }
  specialisations: string[] = [
    'Cardiology', 'Nephrology', 'Neurology', 'Family medicine', 'Orthopaedic', 'Pediatrics', 
    'ENT Specialist', 'Oncology', 'Dermatology', 'Optomology', 'Pulmonology'
  ];
  times: string[] = ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM']
  selected!: string;
  removable: boolean = true;
  doctors: any[] = [];
  show: boolean = false;
  display: Array<boolean> = new Array();
  slots: Array<string> = new Array(4);
  slot: string = "";
  date: string = "";
  doctorId: number = 0;
  patientId: number = 0;
  patientName: string = "";
  hide: boolean = false;
  data: boolean = false;
  spin: boolean = false;
  today: any;

  ngOnInit(): void {
    this.slots = ["false", "false", "false", "false"];
    this.today = new Date().toISOString().slice(0,10);
    
    this.patientId = JSON.parse(localStorage.getItem('patient') || '{}').id;
    this.patientName = JSON.parse(localStorage.getItem('patient') || '{}').name;
  }

  selectSpec(spec: string) {
    this.show = true
    this.data = false;
    this.selected = spec;
    this.doctorService.getBySpecialisation(this.selected)
    .subscribe((data: any) => {
      this.display = new Array(data.length).fill(false);
      this.show = false;
      // console.log(data)
      this.doctors = data;
    })
  }
  book(index: number) {
    this.display[index] = true;
  }
  remove() {
    this.selected = "";
    this.doctors = [];
  }
  close(index: number) {
    this.display[index] = false;
  }
  selectTime(time: string) {
    this.slot = time;
  }
  selectDate(event: any) {
    this.date = event.target.value    
  }
  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  checkStatus(doctorId: number) {
    // alert(this.slot + "  " + this.date)
    // console.log(this.date + " " + doctorId)
    this.getAppointments(doctorId, this.date)
  }
  getAppointments(doctorId: number, date: string) {
    this.hide = true
    this.patientService.getAppointments(doctorId, date)
    .subscribe((data: any) => {
      this.hide = false
      this.data = true
      // console.log(data)
      if(data.length > 0) {
        this.slots[0] = data[0].slot1;
        this.slots[1] = data[0].slot2;
        this.slots[2] = data[0].slot3;
        this.slots[3] = data[0].slot4;
      } else {
        this.slots = ["false", "false", "false", "false"]
      }
      // console.log(this.slots)
    })
  }
  bookAppointment(doctorId: number, doctorName: string) {
    this.spin = true;
    if(this.slot == "10:00 AM")
      this.slots[0] = "true"
    else if(this.slot == "11:00 AM")
      this.slots[1] = "true"
    else if(this.slot == "1:00 PM")
      this.slots[2] = "true"
    else
      this.slots[3] = "true"
    // console.log(this.slots)
    let appointment = {
      doctorId: doctorId,
      patientId: this.patientId,
      patientName: this.patientName,
      doctorName: doctorName,
      date: this.date,
      slot1: this.slots[0],
      slot2: this.slots[1],
      slot3: this.slots[2],
      slot4: this.slots[3],
      status: "null"
    }
    console.log(appointment)
    this.patientService.addAppointment(appointment)
    .subscribe((data: any) => {
      this.data = false;
      this.spin = false;
      // console.log(data)
      this.openSnackbar(data.message, 'close')
      location.href = "patient/home/appointments/requested";
    })
  }
}
