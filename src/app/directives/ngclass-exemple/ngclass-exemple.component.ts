import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass-exemple',
  templateUrl: './ngclass-exemple.component.html',
  styleUrls: ['./ngclass-exemple.component.css'],
})
export class NgclassExempleComponent {
  isOn = false;
  interrupteur() {
    this.isOn = !this.isOn;
  }
}
