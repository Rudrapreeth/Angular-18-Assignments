import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { ProjectedComponent } from '../projected/projected.component';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, ChildComponent, ProjectedComponent],
  template: `
    <h2>Parent Component</h2>

    <app-child
      [data]="parentData"
      (messageToParent)="handleChildMessage($event)">
    </app-child>

    <app-projected>
      <p>This is content projected from Parent to ProjectedComponent.</p>
    </app-projected>

    <p><strong>Message from child:</strong> {{ childMessage }}</p>
    <p *ngIf="notification"><strong>Notification:</strong> {{ notification }}</p>

    <button (click)="sendNotification()">Send Notification to Child</button>
  `
})
export class ParentComponent {
  parentData = 'Hello from Parent';
  childMessage = '';
  notification = '';

  constructor(private notificationService: NotificationService) {
    this.notificationService.notification$.subscribe(msg => {
      this.notification = msg;
    });
  }

  handleChildMessage(message: string) {
    console.log('Parent received:', message); 
    this.childMessage = message;
  }

  sendNotification() {
    this.notificationService.showNotification('This is a message from Parent via Service');
  }
}
