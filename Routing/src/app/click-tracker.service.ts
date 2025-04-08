import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickTrackerService {
  private dashboardClickCount = 0;

  incrementDashboardClick(): void {
    this.dashboardClickCount++;
  }

  canAccessDashboard(): boolean {
    return this.dashboardClickCount >= 5;
  }

  resetClicks(): void {
    this.dashboardClickCount = 0;
  }

  getClickCount(): number {
    return this.dashboardClickCount;
  }
}
