import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { NotificationComponent } from "./notification/notification.component";
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NotificationComponent, ChildComponent, ParentComponent]
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {}

  showNotification(): void {
    this.notificationService.showNotification('This is a test notification!');
  }
}
