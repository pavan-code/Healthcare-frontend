import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };
  isLoggedIn() {
    const token = localStorage.getItem('token')
    if(token)
      return true;
    else
      return false;
  }
  isAdmin() {
    let user = localStorage.getItem('user');
    if(user == "admin")
      return true;
    else
      return false;
  }
  isDoctor() {
    let user = localStorage.getItem('user')
    if(user == "doctor")
      return true;
    else
      return false;
  }
  
  login(data: any) {
    return this.http.post('http://localhost:8080/login', data);
  }

  registerDoctor(details: any) {
    console.log(details);
    return this.http.post('http://localhost:8080/registerDoctor', details);
  }
  registerPatient(details: any) {
    console.log(details);
    return this.http.post('http://localhost:8080/registerPatient', details);
  }
}
