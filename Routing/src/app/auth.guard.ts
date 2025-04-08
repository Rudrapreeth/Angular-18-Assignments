// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ClickTrackerService } from './click-tracker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private clickTracker: ClickTrackerService, private router: Router) {}

  canActivate(): boolean {
    if (this.clickTracker.canAccessDashboard()) {
      return true;
    } else {
      alert(`Access Denied. Click the Dashboard button ${5 - this.clickTracker.getClickCount()} more times.`);
      return false;
    }
  }
}
