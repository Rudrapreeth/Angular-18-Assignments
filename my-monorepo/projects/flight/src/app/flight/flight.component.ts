import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { FlightStatusService } from '../../../../shared/src/lib/flight-status.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, NgFor, NgIf, FormsModule],
  template: `
    <h1>✈️ Available Flights</h1>
    <div class="flight-list">
      <div class="flight-card" *ngFor="let flight of flights" (click)="viewFlight(flight)">
        <div class="flight-info">
          <h3>{{ flight.airline }}</h3>
          <p><strong>{{ flight.origin }}</strong> → <strong>{{ flight.destination }}</strong></p>
          <p>{{ flight.price | currency:'INR' }} | Duration: {{ flight.duration }} hrs</p>
          <p><strong>Status:</strong> {{ flightStatusMap[flight.id] || 'No status' }}</p>
        </div>
      </div>
    </div>

    <div *ngIf="selectedFlight" class="details">
      <h2>✈️ Flight Details</h2>
      <p><strong>Airline:</strong> {{ selectedFlight.airline }}</p>
      <p><strong>Origin:</strong> {{ selectedFlight.origin }}</p>
      <p><strong>Destination:</strong> {{ selectedFlight.destination }}</p>
      <p><strong>Price:</strong> {{ selectedFlight.price | currency:'INR' }}</p>
      <p><strong>Duration:</strong> {{ selectedFlight.duration }} hours</p>

      <label for="statusDropdown"><strong>Status:</strong></label>
      <select id="statusDropdown" [(ngModel)]="selectedStatus">
        <option disabled value="">-- Select Status --</option>
        <option value="Delayed">Delayed</option>
        <option value="Arrived">Arrived</option>
        <option value="Ready to take off">Ready to take off</option>
      </select>

      <button (click)="updateStatus()">Update Status</button>
    </div>
  `,
  styleUrl: './flight.component.css'
})
export class FlightComponent implements OnInit, OnDestroy {
  flights = [
    { id: 1, origin: 'Hyderabad', destination: 'Jaipur', price: 350, duration: 5, airline: 'Indigo' },
    { id: 2, origin: 'Bangalore', destination: 'Kolkata', price: 250, duration: 4, airline: 'Qatar Airways' },
    { id: 3, origin: 'Chennai', destination: 'Delhi', price: 150, duration: 3, airline: 'Air India' },
  ];

  flightStatusMap: { [id: number]: string } = {};
  selectedFlight: any;
  selectedStatus: string = '';
  private sub!: Subscription;

  constructor(private flightStatusService: FlightStatusService) {}

  ngOnInit(): void {
    this.sub = this.flightStatusService.status$.subscribe(statusMap => {
      this.flightStatusMap = statusMap;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  viewFlight(flight: any) {
    this.selectedFlight = flight;
    this.selectedStatus = this.flightStatusMap[flight.id] || '';
  }

  updateStatus() {
    if (this.selectedFlight && this.selectedStatus) {
      this.flightStatusService.updateStatus(this.selectedFlight.id, this.selectedStatus);
    }
  }
}
