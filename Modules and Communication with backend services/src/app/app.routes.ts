import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { TasksPageComponent } from './features/tasks/pages/tasks-page/tasks-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'tasks', component: TasksPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
