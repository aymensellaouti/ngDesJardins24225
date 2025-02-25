import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent {
  // J'affiche le nom prenom et image d'un cv
  @Input()
  cv: Cv | null = null;
  toastr =  inject(ToastrService);
  embaucheService = inject(EmbaucheService);

  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(`Le cv ${this.cv.name} a été pré embauché avec succès`)
      } else {
        this.toastr.warning(
          `Le cv ${this.cv.name} est déjà pré embauché`
        );
      }
    }
  }
}
