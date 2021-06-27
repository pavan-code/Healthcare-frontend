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

  getAllDoctors() {
    return this.http.get(`http://localhost:8080/allDoctors`, this.httpOptions)
  }

  getBySpecialisation(specialisation: String) {
    return this.http.get(`http://localhost:8080/getDoctorsBySpecialisation/${specialisation}`, this.httpOptions)
  }

  deleteDoctor(id: any) {
    return this.http.delete(`http://localhost:8080/deleteDoctor/${id}`, this.httpOptions)
  }
  appointmentRequests(doctorId: number) {
    return this.http.get(`http://localhost:8080/pending-for-doctor?doctorId=${doctorId}`, this.httpOptions)
  }
  rejectAppointment(appointment: any) {
    return this.http.post(`http://localhost:8080/reject-appointment`, appointment, this.httpOptions);
  }
  
  acceptAppointment(accepted: any) {
    return this.http.post(`http://localhost:8080/accept-appointment`, accepted,this.httpOptions)
  }

  deleteAppointment(appointment: any) {
    return this.http.post(`http://localhost:8080/delete-appointment`, appointment, this.httpOptions)
  }
  approvedAppointments(doctorId: number) {
    return this.http.get(`http://localhost:8080/doctor-approved?doctorId=${doctorId}`, this.httpOptions)
  }

}
