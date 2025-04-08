import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef, private re: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.re.setStyle(this.el.nativeElement, 'backgroundColor', '#e0f7fb');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.re.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

}
