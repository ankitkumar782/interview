import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InoutcompComponent } from '../../decorators/inoutcomp/inoutcomp.component';


@Component({
  selector: 'app-templateform',
  imports: [FormsModule,InoutcompComponent],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {
  // Form data
  formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Method to handle form submission
  onSubmit() {
    console.log('Form submitted:', this.formData);
  }

  // Method to handle form reset
  onReset() {
    this.formData = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
}
