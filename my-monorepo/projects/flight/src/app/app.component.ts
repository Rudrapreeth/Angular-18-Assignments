import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlightComponent } from "./flight/flight.component";

@Component({
  selector: 'app-root',
  imports: [FlightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flight';
}
