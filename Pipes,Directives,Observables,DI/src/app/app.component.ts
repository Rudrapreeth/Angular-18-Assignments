import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'async-pipe';
}
