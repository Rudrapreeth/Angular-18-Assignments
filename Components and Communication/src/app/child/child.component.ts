import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h3>Child Component</h3>
    <p>Input from Parent: {{ data }}</p>
    <p *ngIf="notification">Notification: {{ notification }}</p>
    <button (click)="sendMessage()">Send to Parent</button>
  `
})
export class ChildComponent {
  @Input() data!: string;
  @Output() messageToParent = new EventEmitter<string>();

  notification = '';

  constructor(private notificationService: NotificationService) {
    this.notificationService.notification$.subscribe(msg => {
      this.notification = msg;
    });
  }

  sendMessage() {
    this.messageToParent.emit('Hello from Child to Parent');
  }
}
