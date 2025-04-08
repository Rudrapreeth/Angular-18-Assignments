import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { UserService, User } from '../user.service';
import { AuthService } from '../auth.service';
import { ReversePipe } from '../reverse.pipe';
import { SalaryPipe } from '../salary.pipe';
import { UnlessDirective } from '../directives/unless.directive';
import { TextColorDirective } from '../directives/text-color.directive';
import { NewUserDirective } from '../directives/app-new-user.directive';
@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [
    CommonModule,FormsModule,ReversePipe,TitleCasePipe,SalaryPipe,HoverHighlightDirective,UnlessDirective,TextColorDirective,NewUserDirective
  ]
})
export class UserListComponent {
  users$: Observable<User[]>;
  userCount: number | null = null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
    }

    this.users$ = this.userService.getUsers();
    this.fetchUserCount();
  }

  fetchUserCount() {
    this.userService.getUserCount().then((count) => {
      this.userCount = count;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page
  }
}
