import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InoutcompComponent } from '../../decorators/inoutcomp/inoutcomp.component';
import {Customdirective} from '../../../Directive/custom.directive';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,InoutcompComponent,Customdirective],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

  getdata:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email: new FormControl('',[Validators.required, Validators.email]), 
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('') 
  });
onSubmit(){
  console.log(this.getdata.value)
}
output(){
  console.log("output")
}

}
