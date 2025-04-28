import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlightComponent } from "../../../flight/src/app/flight/flight.component";
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product';
}
