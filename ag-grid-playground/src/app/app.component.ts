import { Component } from '@angular/core';
import { GridPlaygroundComponent } from "./grid-playground/grid-playground.component";

@Component({
  selector: 'app-root',
  imports: [GridPlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ag-grid-playground';
}
