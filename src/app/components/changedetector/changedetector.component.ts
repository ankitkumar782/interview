import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-changedetector',
  imports: [],
  templateUrl: './changedetector.component.html',
  styleUrl: './changedetector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangedetectorComponent implements OnChanges,OnInit ,DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  count: number = 0;
  constructor(private detector: ChangeDetectorRef) {
    setInterval(() => {
      this.count++
      this.detector.markForCheck()
    }, 90000)
  }
  ngOnInit(): void {
    console.log("first func to get called ,oninit")
  }
  ngOnChanges(): void {
    console.log("when input is there it is called ,on changes")
  }
  ngDoCheck(): void {
    console.log("change detection is called")
  }
  ngAfterContentInit(): void {
    console.log("after content init")
  }
  ngAfterViewInit(): void {
    console.log("after view init ,is initiallized then you can use native element feature")
  }
  ngAfterContentChecked(): void {
    console.log("contect checked")
  }
  ngAfterViewChecked(): void {
    console.log("after view checked")
  }
}
