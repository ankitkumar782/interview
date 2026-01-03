import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addemp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  empname: string = 'ankit kumar';
  name = signal('abhishek kumar');
  jobtitle: string = 'it';
  input: string = 'text';
  classname: string = 'bg_color';

  isLoading: boolean = false;

  async addemp() {
    this.isLoading = true; // show spinner

    try {
      // Simulate delay like API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.name.set('anshu kumar');
      console.log('Employee added');
    } catch (err) {
      console.error('Error:', err);
    } finally {
      this.isLoading = false; // hide spinner
    }
  }
}
