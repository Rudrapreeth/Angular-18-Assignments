import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-td-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './td-form.component.html',
  styleUrl: './td-form.component.css'
})
export class TdFormComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
  };

  savedUsers: any[] = [];
  notification: string = '';
  constructor(private cdr: ChangeDetectorRef) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.savedUsers.push({ ...form.value });
      this.notification = `User ${form.value.firstName} ${form.value.lastName} added succesfully!`;

      //Notification timeout
      setTimeout(() => {
        this.notification = '';
      }, 3000);
      this.onReset(form);
    }
  }
  //reset form
  onReset(form: NgForm) {
    form.resetForm();
  }
  //Clear saved entries
  onClearAll() {
    this.savedUsers = [];
    this.cdr.detectChanges();
  }
}
