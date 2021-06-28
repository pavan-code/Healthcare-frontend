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
  baseURL: String = "https://8080-cdfbbaabecfdfadcdafcbbdcdcacbbfdbacbb.examlyiopb.examly.io/";
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
    return this.http.post(`${this.baseURL}login`, data);
  }

  registerDoctor(details: any) {
    console.log(details);
    return this.http.post(`${this.baseURL}registerDoctor`, details);
  }
  registerPatient(details: any) {
    console.log(details);
    return this.http.post(`${this.baseURL}registerPatient`, details);
  }
}
