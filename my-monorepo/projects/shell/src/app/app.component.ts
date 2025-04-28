import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../../../product/src/app/product/product.component';
import { FlightComponent } from '../../../flight/src/app/flight/flight.component';
import { CommonModule } from '@angular/common';
import { FlightStatusService } from '../../../shared/src/lib/flight-status.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    ProductComponent,
    FlightComponent,
    CommonModule,
    FormsModule
  ],
  providers: [FlightStatusService],
  template: `
    <h1>Microfrontend Shell</h1>
    <nav>
      <button (click)="showComponent('product')">Product</button>
      <button (click)="showComponent('flight')">Flight</button>
    </nav>

    <!-- Show Flight status update UI only when flight component is active -->
    <div *ngIf="activeComponent === 'flight'" style="margin-top: 1rem;">
      <label for="flightId">Flight ID:</label>
      <input id="flightId" type="number" [(ngModel)]="flightId" placeholder="e.g., 1" />
    </div>

    <!-- Conditionally show selected remote component -->
    <app-product *ngIf="activeComponent === 'product'"></app-product>
    <app-flight *ngIf="activeComponent === 'flight'"></app-flight>

    <router-outlet></router-outlet>
  `,
  styles: [`
    nav button {
      margin-right: 1rem;
    }
    input {
      margin: 0 0.5rem 0.5rem 0;
    }
    label {
      margin-right: 0.25rem;
    }
  `]
})
export class AppComponent {
  activeComponent: 'product' | 'flight' | null = null;
  flightId: number = 1;
  
  constructor(private flightStatusService: FlightStatusService) {}

  showComponent(component: 'product' | 'flight') {
    this.activeComponent = component;
  }  
}
