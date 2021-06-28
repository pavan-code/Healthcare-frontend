import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };
  baseURL: String = "https://8080-cdfbbaabecfdfadcdafcbbdcdcacbbfdbacbb.examlyiopb.examly.io/";

  getAllDoctors() {
    return this.http.get(`${this.baseURL}allDoctors`, this.httpOptions)
  }

  getBySpecialisation(specialisation: String) {
    return this.http.get(`${this.baseURL}getDoctorsBySpecialisation/${specialisation}`, this.httpOptions)
  }

  deleteDoctor(id: any) {
    return this.http.delete(`${this.baseURL}deleteDoctor/${id}`, this.httpOptions)
  }
  appointmentRequests(doctorId: number) {
    return this.http.get(`${this.baseURL}pending-for-doctor?doctorId=${doctorId}`, this.httpOptions)
  }
  rejectAppointment(appointment: any) {
    return this.http.post(`${this.baseURL}reject-appointment`, appointment, this.httpOptions);
  }
  
  acceptAppointment(accepted: any) {
    return this.http.post(`${this.baseURL}accept-appointment`, accepted,this.httpOptions)
  }

  deleteAppointment(appointment: any) {
    return this.http.post(`${this.baseURL}delete-appointment`, appointment, this.httpOptions)
  }
  approvedAppointments(doctorId: number) {
    return this.http.get(`${this.baseURL}doctor-approved?doctorId=${doctorId}`, this.httpOptions)
  }

}
