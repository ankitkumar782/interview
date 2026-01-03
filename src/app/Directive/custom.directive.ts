import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[Customdirective]',
}
)
export  class Customdirective {
    constructor(private element:ElementRef) {
        // this.element.nativeElement.style.backgroundColor='red';
    }
    @HostBinding('style.backgroundColor') scrollkr:any='red';

    @HostListener("mouseenter") change(){
        this.scrollkr='yellow';
    }

    @HostListener("click") change2(){
        this.scrollkr='green';
    }


}