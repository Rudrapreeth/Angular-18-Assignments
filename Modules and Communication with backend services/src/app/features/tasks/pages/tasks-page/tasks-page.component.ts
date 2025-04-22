import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/task.service';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-page.component.html',
})
export class TasksPageComponent {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  taskForm: Partial<Task> = { title: '', completed: false };
  isEditMode = false;
  taskFilter: 'all' | 'completed' | 'incomplete' = 'all';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    switch (this.taskFilter) {
      case 'completed':
        this.filteredTasks = this.tasks.filter((t) => t.completed);
        break;
      case 'incomplete':
        this.filteredTasks = this.tasks.filter((t) => !t.completed);
        break;
      default:
        this.filteredTasks = [...this.tasks];
    }
  }

  onSubmit() {
    if (this.isEditMode && this.taskForm.id != null) {
      this.taskService.updateTask(this.taskForm as Task).subscribe(() => {
        this.resetForm();
        this.loadTasks();
      });
    } else {
      this.taskService.addTask(this.taskForm as Task).subscribe(() => {
        this.resetForm();
        this.loadTasks();
      });
    }
  }

  editTask(task: Task) {
    this.taskForm = { ...task };
    this.isEditMode = true;
  }

  deleteTask(id: number | undefined) {
    if (id === undefined) return;
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
      if (this.isEditMode) this.resetForm();
    });
  }

  toggleCompletion(task: Task) {
    const updated = { ...task, completed: !task.completed };
    this.taskService.updateTask(updated).subscribe(() => this.loadTasks());
  }

  resetForm() {
    this.taskForm = { title: '', completed: false };
    this.isEditMode = false;
  }
}
