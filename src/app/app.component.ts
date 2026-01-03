import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddempComponent } from './components/addemp/addemp.component';
import { GetempComponent } from './components/getemp/getemp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interview';
}
