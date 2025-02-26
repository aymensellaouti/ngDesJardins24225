import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [],
})
export class CvComponent {
  /**
   * Le cv sélectionné
   */
  today = new Date();
  cvService = inject(CvService);
  selectedCv$ = this.cvService.selectedCv$;
  selectedCv: Cv | null = null;
  /**
   * La liste des cvs
   */
  cvs: Cv[] = this.cvService.getCvs();
  private loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.log('cc je suis le cvComponent');
    this.cvService.selectedCv$.subscribe({
      next: cv => this.selectedCv = cv
    })
  }
  // onSelectCv(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
