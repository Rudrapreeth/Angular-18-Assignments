import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClickTrackerService } from '../click-tracker.service';

@Component({
  selector: 'app-home',
  template: `
    <h2>Welcome to Home</h2>
    <button (click)="goToDashboard()">Dashboard</button>
  `
})
export class HomeComponent {
  constructor(private tracker: ClickTrackerService, private router: Router) {}

  goToDashboard() {
    this.tracker.incrementDashboardClick();

    if (this.tracker.canAccessDashboard()) {
      this.router.navigate(['/dashboard']);
    } else {
      alert(`Clicked ${this.tracker.getClickCount()} times. Click ${5 - this.tracker.getClickCount()} more to access Dashboard.`);
    }
  }
}
