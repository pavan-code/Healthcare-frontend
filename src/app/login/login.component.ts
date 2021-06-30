import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) { }

  login!: FormGroup;
  hide: boolean = true;

  ngOnInit(): void {
    let user = localStorage.getItem('user')
    if (this.authService.isLoggedIn() && user == 'patient')
      location.href = "patient/home"
    else if (this.authService.isLoggedIn() && user == 'doctor')
      location.href = "doctor/home"
    else if (this.authService.isLoggedIn() && user == 'admin')
      location.href = "admin/dashboard"
    this.createForm();
  }

  createForm() {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.login.valueChanges.subscribe((data) => this.onValueChanged(data));
  }
  formErrors: any = {
    email: '',
    password: '',
  };
  validationMsgs: any = {
    email: {
      required: 'Email ID required',
      email: 'Enter a valid email ID'
    },
    password: {
      required: 'Password is required',
    },
  };
  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['success']
    });
  }

  getLogin() {
    // console.log(this.login.value);
    this.hide = false;
    this.authService.login(this.login.value).subscribe(
      (res: any) => {
        // console.log(res);
        this.hide = true;
        if (res.jwt == null) {
          this.openSnackbar(res.message, '')
        } else {
          localStorage.setItem('token', res.jwt)
          this.openSnackbar(res.message, '')
          if (res.patient) {
            localStorage.setItem('patient', JSON.stringify(res.patient))
            localStorage.setItem('user', 'patient')
            setTimeout(() => {
              location.href = 'patient/home'
            }, 2500)
          }
          else if (res.doctor && res.doctor.role == 'ROLE_DOCTOR') {
            localStorage.setItem('doctor', JSON.stringify(res.doctor))
            localStorage.setItem('user', 'doctor')
            setTimeout(() => {
              location.href = 'doctor/home'
            }, 2500)
          }
          else {
            localStorage.setItem('admin', JSON.stringify(res.doctor))
            localStorage.setItem('user', 'admin')
            setTimeout(() => {
              location.href = 'admin/dashboard'
            }, 2500);
          }

        }
      },
      (err) => console.log(err)
    );
  }
  onValueChanged(data?: any) {
    if (!this.login) {
      return;
    }
    const form = this.login;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previuos error messages if any
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMsgs[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key];
            }
          }
        }
      }
    }
  }
}
