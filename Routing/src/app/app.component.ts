import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Correct import of Router
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, FooterComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {} 

  navigateToHome() {
    this.router.navigate(['/']); 
  }

  navigateToAbout() {
    this.router.navigate(['/about']);  
  }

  navigateToContact() {
    this.router.navigate(['/contact']);  
  }
  navigateToUser(userId: number){
    this.router.navigate([`/user/${userId}`]);
  }
  navigateToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
