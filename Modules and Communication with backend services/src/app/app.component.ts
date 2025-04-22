import { Component, OnInit } from '@angular/core';
import { TaskService } from './features/tasks/services/task.service';
import { Task } from './features/tasks/services/task.service';
import { HeaderComponent } from "./shared/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterOutlet,RouterModule]
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  taskForm: Task = { title: '', completed: false };
  isEditMode: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Load all tasks from the API
  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // Set form to edit mode
  editTask(task: Task): void {
    this.taskForm = { ...task };
    this.isEditMode = true;
  }

  // Submit task form (Add or Update)
  submitTask(): void {
    if (this.isEditMode) {
      // Update existing task
      this.taskService.updateTask(this.taskForm).subscribe(() => {
        this.resetForm();
        this.loadTasks();
      });
    } else {
      // Add new task
      this.taskService.addTask(this.taskForm).subscribe(() => {
        this.resetForm();
        this.loadTasks();
      });
    }
  }

  // Reset form fields and switch to Add mode
  resetForm(): void {
    this.taskForm = { title: '', completed: false };
    this.isEditMode = false;
  }

  // Delete a task
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleComplete(task: Task): void {
    this.taskService.toggleTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  
}
