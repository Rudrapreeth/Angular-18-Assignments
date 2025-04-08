import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username='';
  password='';
  message='';
  loading=false;

  constructor(private authService: AuthService,private router: Router){}

  login(){
    this.loading=true;
    this.message='';
    
    this.authService.login(this.username, this.password)
    .then(() => {
      this.router.navigate(['/users']); // Redirect to User List Page
    })
    .catch((errorMessage: string) => {
      this.message = errorMessage;
    })
    .finally(() => {
      this.loading = false;
    });

  }

}
