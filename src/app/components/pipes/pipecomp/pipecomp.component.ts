import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../../Pipe/na.pipe';

@Component({
  selector: 'app-pipecomp',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,NaPipe],
  templateUrl: './pipecomp.component.html',
  styleUrl: './pipecomp.component.css'
})
export class PipecompComponent {
   emp:object={
    name:'suresh',
    age:23,
    salary:25000,
    dob:new Date('1999-01-01'),
    address:{
      city:'Hyderabad',
      state:'Telangana'
    }
   }
   name:string='';
   date:Date=new Date();
   data:string='hello world this is angular pipe example';

   

}
