import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';

  /**
   * Représente la couleur de la div
   */
  color: string = this.defaultColor;

  /**
   * Affecte une nouvelle couleur à color
   * @param newColorInput : L'input qui contient la valeur couleur à affecter à color
   */
  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = "";
  }

  reset() {
    this.color = this.defaultColor;
  }
}
