import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";

@Component({
  selector: 'app-root',
  imports: [LifecycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle-hooks';
}
