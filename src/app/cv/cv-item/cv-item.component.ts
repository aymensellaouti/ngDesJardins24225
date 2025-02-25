import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  // J'affiche le nom prenom et image d'un cv
  @Input({required: true})
  cv!: Cv;

  @Output()
  selectCv = new EventEmitter<Cv>();

  /**
   * On met un event qui notifie que le cv a été sélectionné
   */
  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
