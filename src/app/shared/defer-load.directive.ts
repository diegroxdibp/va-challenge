import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[deferLoad]'
})
export class DeferLoadDirective {
  @Output() public deferLoad: EventEmitter<any> = new EventEmitter();

  private _intersectionObserver?: IntersectionObserver;

  constructor(
    private _element: ElementRef
  ) { }

}
