import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  getAllPatients() {
    return this.http.get(`http://localhost:8080/all-patients`, this.httpOptions)
  }

  getAppointments(doctorId: number, date: string) {
    let obj = {
      "doctorId": doctorId,
      "date": date
    }
    return this.http.post(`http://localhost:8080/get-appointments`, obj, this.httpOptions)
  }

  addAppointment(appointment: any) {
    return this.http.post(`http://localhost:8080/add-appointment`, appointment, this.httpOptions)
  }

  getPendingAppointments(patientId: number) {
    return this.http.get(`http://localhost:8080/patient-pending-appointments?patientId=${patientId}`, this.httpOptions)
  }

  getApprovedAppointments(patientId: number) {
    return this.http.get(`http://localhost:8080/patient-approved?patientId=${patientId}`, this.httpOptions)
  }
}
