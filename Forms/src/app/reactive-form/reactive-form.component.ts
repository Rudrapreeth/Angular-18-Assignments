import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  savedUsers: any[] = []; //Storing submitted users
  notification: string | null = null; //Notification message
  i: number | any;
  showHobbies=false;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    //Initializing the Reactive Form
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      hobbies: this.fb.array([])
    });
  }
  //Getter for Hobbies
  get hobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  //Add a new hobby field
  addHobby() {
    this.hobbies.push(this.fb.control('', Validators.required));
  }

  //Remove a hobby field
  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  //Form submission logic
  onSubmit() {
    if (this.userForm.valid) {
      this.savedUsers.push({ ...this.userForm.value });
      const userData = {
        ...this.userForm.value,
        hobbies: this.hobbies.value.filter((hobby: string) => hobby.trim() !== '')
      };

      //Show notification
      this.notification = `User ${this.userForm.value.firstName} ${this.userForm.value.lastName} added successfully!`;

      //Hide notification after 3 seconds
      setTimeout(() => {
        this.notification = null;
      }, 3000);

      //Reset form after submission
      this.onReset();
    }
  }

  // Manual form reset method
  onReset() {
    this.userForm.reset();
    this.hobbies.clear(); //Clears input fields and validation
  }
  
  removeSavedUser(index: number) {
    if (index > -1 && index < this.savedUsers.length) {
      this.savedUsers.splice(index, 1);
      this.savedUsers = [...this.savedUsers];
    }
  } 

  //Clear all saved users
  onClearAll() {
    this.savedUsers = [];  //Clears the saved users list
    this.cdr.detectChanges(); //Ensures Angular updates the UI
  }
}
