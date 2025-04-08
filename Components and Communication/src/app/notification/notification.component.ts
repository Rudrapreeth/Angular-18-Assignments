import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  imports:[CommonModule],
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: string | null = null;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  
    this.notificationService.notification$.subscribe(
      (message) => {
        this.notification = message;

      
        setTimeout(() => {
          this.notification = null;
        }, 9000);
      }
    );
  }
}
