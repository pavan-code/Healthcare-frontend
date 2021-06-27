import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { states } from '../shared/states';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss'],
})
export class DoctorRegisterComponent implements OnInit {
  districts: Array<String> = [];
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private snackbar: MatSnackBar) {}
  states: Array<any> = [];
  register!: FormGroup;
  show: boolean = true;

  ngOnInit(): void {
    this.states = states;
    this.createForm();
  }
  formErrors:any = {
    
    name: '',        
    email: '',
    mobile: '',
    password: '',
    specialisation: '',
    qualification: '',
    experience: '',
    address: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
  };
  validationMsgs:any = {
    name: {
      'required': "Patient name required"
    },
    email: {
      'required': "Email ID is required",
      'email': "Must be a valid email id"
    },
    mobile: {
      'required': 'Mobile number is required',
      'pattern': 'Enter a valid 10 digit number'
    },
    password: {
      'required': 'Password is required',
      'minlength': 'Password should be min. 8 characters'
    },
    specialisation: {
      'required': 'Select Specialisation'
    },
    qualification: {
      'required': 'Enter your Qualification'
    },
    experience: {
      'required': 'Enter your experience'
    },
    address: {
      'required': 'Enter your address'
    },
    city: {
      'required': 'Enter city'
    },
    state: {
      'required': 'Select your state'
    },
    district: {
      'required': 'Select your district'
    },
    pincode: {
      'required': 'Enter your postal pincode'
    }
  }
  createForm() {
    this.register = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      specialisation: ['', [Validators.required]],  
      qualification: ['', [Validators.required]],    
      experience: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
    });
    this.register.valueChanges.subscribe((data) => this.onValueChanged(data));
  }
  onValueChanged(data?: any) {
    if (!this.register) {
      return;
    }
    const form = this.register;
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
  changeState(event: any) { 
    this.districts = [];
    let state = event.target.value;
    for (let i = 0; i < this.states.length; i++) {
      if (this.states[i].name == state) {
        this.districts = this.states[i].districts;
        break;
      }
    }
  }
  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  getRegister() {
    this.show = false;
    console.log(this.register.value)
    this.authService.registerDoctor(this.register.value)
    .subscribe((res:any) => {
      this.show = true;
      console.log(res);
      this.openSnackbar(res.message, 'close')
      setTimeout(() => {
        location.href = 'admin/all-doctors'
      }, 2500)
    })
  }
}
