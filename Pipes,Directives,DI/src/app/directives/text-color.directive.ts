import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnChanges {
  @Input('appTextColor') color: string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }
}
