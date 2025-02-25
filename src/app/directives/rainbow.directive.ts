import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class RainbowDirective {
  // Quels attributs
  @HostBinding('style.color')
  color = 'black';
  @HostBinding('style.borderColor')
  borderColor = 'black';
  constructor() {
    console.log('AppRainbow');
  }
  // qules comportement
  @HostListener('keyup') onKeyUp() {
    this.color = this.borderColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }
}
