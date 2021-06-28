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
  baseURL: String = "https://8080-cdfbbaabecfdfadcdafcbbdcdcacbbfdbacbb.examlyiopb.examly.io/";


  getAllPatients() {
    return this.http.get(`${this.baseURL}all-patients`, this.httpOptions)
  }

  getAppointments(doctorId: number, date: string) {
    let obj = {
      "doctorId": doctorId,
      "date": date
    }
    return this.http.post(`${this.baseURL}get-appointments`, obj, this.httpOptions)
  }

  addAppointment(appointment: any) {
    return this.http.post(`${this.baseURL}add-appointment`, appointment, this.httpOptions)
  }

  getPendingAppointments(patientId: number) {
    return this.http.get(`${this.baseURL}patient-pending-appointments?patientId=${patientId}`, this.httpOptions)
  }

  getApprovedAppointments(patientId: number) {
    return this.http.get(`${this.baseURL}patient-approved?patientId=${patientId}`, this.httpOptions)
  }
}
