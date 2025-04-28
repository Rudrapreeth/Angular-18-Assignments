import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightStatusService {
  private flightStatusMap: { [id: number]: string } = {};
  private statusSubject = new BehaviorSubject<{ [id: number]: string }>({});

  // Observable to subscribe to the full map
  public status$: Observable<{ [id: number]: string }> = this.statusSubject.asObservable();

  updateStatus(flightId: number, status: string): void {
    this.flightStatusMap[flightId] = status;
    this.statusSubject.next({ ...this.flightStatusMap }); // emit a copy of the latest
  }

  getStatusFor(flightId: number): string {
    return this.flightStatusMap[flightId] || 'No status';
  }
}
