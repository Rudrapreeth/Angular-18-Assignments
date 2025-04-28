import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightDataService {
  private selectedFlight = new BehaviorSubject<string | null>(null);
  selectedFlight$ = this.selectedFlight.asObservable();

  setFlight(flight: string) {
    this.selectedFlight.next(flight);
  }
}
