import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNewUser]'
})
export class NewUserDirective implements OnInit {
  @Input('appNewUser') joinedDate!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const joined = new Date(this.joinedDate);
    const now = new Date();
    const daysDiff = (now.getTime()-joined.getTime())/(1000 * 3600 * 24);

    if (daysDiff <= 30) {
      const badge = document.createElement('span');
      badge.innerText = '*#* New';
      badge.style.marginLeft = '10px';
      badge.style.color = 'blue';
      this.el.nativeElement.appendChild(badge);
    }
  }
}
