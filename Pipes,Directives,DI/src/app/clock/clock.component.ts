import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.component.html',
  standalone: true,
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  time$: Observable<string>=interval(1000).pipe(
    map(()=>new Date().toLocaleTimeString())
  );
}
