import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  /**
   * Le cv sélectionné
   */
  selectedCv: Cv | null = null;

  cvs: Cv[] = [
    new Cv(1, 'aymen', 'sellaouti', 'teacher', '1234', 40, 'as.jpg'),
    new Cv(
      2,
      'skander',
      'sellaouti',
      'enfant',
      '1234',
      4,
      'rotating_card_profile3.png'
    ),
  ];
}
