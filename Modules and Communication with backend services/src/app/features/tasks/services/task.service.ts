import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.log(`[Logger] ${new Date().toLocaleTimeString()} - GET: Fetching all tasks`);
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    console.log(`[Logger] ${new Date().toLocaleTimeString()} - POST: Adding new task "${task.title}"`);
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    const id=Number(task.id);
    console.log(`[Logger] ${new Date().toLocaleTimeString()} - PUT: Updating task ID ${task.id}`);
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    console.log(`[Logger] ${new Date().toLocaleTimeString()} - DELETE: Removing task ID ${id}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  toggleTask(task: Task): Observable<Task> {
    const updated = { ...task, completed: !task.completed };
    return this.updateTask(updated);
  }
}
