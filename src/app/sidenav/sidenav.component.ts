import { AuthService } from './../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, 
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document) {
    this.getScreenSize();
   }
   scrWidth: number = 0;
   sidebar: any;
   opened: boolean = true;
   hide: boolean = true;
   width: number = 0;
   token: any;
   show: boolean = false;
   isAdmin: boolean = false;
   username!: string;
   isDoctor: boolean = false;

  ngOnInit(): void {
    this.username = JSON.parse(localStorage.getItem('doctor') || '{}').name || JSON.parse(localStorage.getItem('patient') || '{}').name
    this.isDoctor = this.authService.isDoctor();
    this.isAdmin = this.authService.isAdmin();    
    this.token = localStorage.getItem("token");
    if(this.token) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: undefined) {
    
    
    // this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    // console.log(this.scrWidth);
    if(this.scrWidth <= 768) {
      this.sidebar = 'over'
      this.opened = false;
      this.hide = false;
    }
    else {
      this.sidebar = 'over';
      this.opened = false;      
      this.hide = true
    }
  }
  home() {
    const user = localStorage.getItem('user')
    if(user == 'admin') {
      location.href = "admin/dashboard"
    } else if(user == 'patient'){
      location.href = "patient/home"
    } else {
      location.href = 'doctor/home'
    }
  }
  openSnackbar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'      
    })
  }
  logout() {
    localStorage.clear();
    this.openSnackbar("Logged out successfully", 'close')
    setTimeout(() => {
      location.href = "login"      
    }, 2500);
  }
}
