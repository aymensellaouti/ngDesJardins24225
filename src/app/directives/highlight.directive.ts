import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  // La directive d'attribut permet de modifier
  // l'apparence et le comportement d'un élément
  // Du DOM
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
