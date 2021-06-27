import { DoctorAcceptedComponent } from './doctor-accepted/doctor-accepted.component';
import { DoctorRequestsComponent } from './doctor-requests/doctor-requests.component';
import { PatientAcceptedComponent } from './patient-accepted/patient-accepted.component';
import { PatientRequestsComponent } from './patient-requests/patient-requests.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AuthGuard } from './guard/auth.guard';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }, {
    path: 'login', component: LoginComponent,
  }, {
    path: 'patient/home', component: HomeComponent, canActivate: [AuthGuard]
  }, {
    path: 'register', component: PatientRegisterComponent,
  }, {
    path: 'admin/doctor-registration', component: DoctorRegisterComponent, canActivate: [AuthGuard]
  }, {
    path: 'doctor/home', component: DoctorHomeComponent, canActivate: [AuthGuard]
  }, {
    path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]
  }, {
    path: 'admin/all-doctors', component: AllDoctorsComponent, canActivate: [AuthGuard]
  }, {
    path: 'admin/all-patients', component: AllPatientsComponent, canActivate: [AuthGuard]
  }, {
    path: 'admin/update-doctor', component: UpdateDoctorComponent, canActivate: [AuthGuard]
  }, {
    path: 'patient/home/book-appointment', component: BookAppointmentComponent, canActivate: [AuthGuard]
  }, {
    path: 'patient/home/appointments/requested', component: PatientRequestsComponent, canActivate: [AuthGuard]
  }, {
    path: 'patient/home/appointments/accepted', component: PatientAcceptedComponent, canActivate: [AuthGuard]
  }, {
    path: 'doctor/home/appointments/requests', component: DoctorRequestsComponent
  }, {
    path: 'doctor/home/appointments/accepted', component: DoctorAcceptedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
