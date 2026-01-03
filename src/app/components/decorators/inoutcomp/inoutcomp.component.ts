import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Grocery } from '../../store/reducers/grocery.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inoutcomp',
  imports: [],
  templateUrl: './inoutcomp.component.html',
  styleUrl: './inoutcomp.component.css'
})
export class InoutcompComponent implements OnInit,OnChanges{
@Input() message:string='';
@Output() clickme=new EventEmitter<string>();
grocery$?:Observable<Grocery[]>
onClick(){
  this.clickme.emit()
}

ngOnInit(): void {
  console.log("onint")
}
ngOnChanges(): void {
  console.log("onchanges is called")
}
  constructor(private store:Store<{ groceries: Grocery[] }>) {
   this.grocery$=store.select('groceries')
    this.grocery$.subscribe((data)=>{
      console.log(data)
    })
  }
}
