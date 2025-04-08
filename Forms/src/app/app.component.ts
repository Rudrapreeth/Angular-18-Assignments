import { Component } from '@angular/core';
import { TdFormComponent } from "./td-form/td-form.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [TdFormComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms';
}
