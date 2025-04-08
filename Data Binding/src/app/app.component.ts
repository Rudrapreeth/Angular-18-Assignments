import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { StringInterpolationComponent } from "./string-interpolation/string-interpolation.component";
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, EventBindingComponent, PropertyBindingComponent, StringInterpolationComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-18-Data-Binding';
}
