import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Finish Angular app', completed: true },
  ];

}
