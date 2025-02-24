import { Component } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css'],
})
export class RotatingCardComponent {
  // On doit définir le state (ce qu'on veut manipuler dans le HTML)
  name = 'Sellaouti';
  firstname = 'Aymen';
  job = 'Teacher';
  path = 'rotating_card_profile3.png';
  // On les affiche
  // onles bind en two way avec les inputs
}
