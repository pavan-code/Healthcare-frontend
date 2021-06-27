// import { InterceptorService } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PatientRequestsComponent } from './patient-requests/patient-requests.component';
import { PatientAcceptedComponent } from './patient-accepted/patient-accepted.component';
import { DoctorRequestsComponent } from './doctor-requests/doctor-requests.component';
import { DoctorAcceptedComponent } from './doctor-accepted/doctor-accepted.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    PatientRegisterComponent,
    DoctorRegisterComponent,
    AdminDashboardComponent,
    DoctorHomeComponent,
    BookAppointmentComponent,
    AllDoctorsComponent,
    AllPatientsComponent,
    UpdateDoctorComponent,
    SidenavComponent,
    PatientRequestsComponent,
    PatientAcceptedComponent,
    DoctorRequestsComponent,
    DoctorAcceptedComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,MatGridListModule,
    MatSidenavModule,
    MatListModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatChipsModule,
    MatCheckboxModule, MatDialogModule, MatSlideToggleModule, MatTableModule, MatSortModule, MatDatepickerModule,
    MatNativeDateModule, MatButtonToggleModule, MatExpansionModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,
  // {
    // provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
