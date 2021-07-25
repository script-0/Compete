import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myAutofocus]'
})
export class FocusDirective {

  constructor(private el:ElementRef){}

  ngAfterViewInit(){
      this.el.nativeElement.focus();
  }

}
