import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-getemp',
  imports: [CommonModule,FormsModule],
  templateUrl: './getemp.component.html',
  styleUrl: './getemp.component.css'
})
export class GetempComponent {
  selectedCity:string="";
cityname:string []=["delhi","mumbai","banglore","kolkata"];
onCityChange(){
  console.log(this.selectedCity);

}
isclick:boolean=true;

}
