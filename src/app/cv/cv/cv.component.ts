import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoService } from 'src/app/todo/service/todo.service';

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
  selectedCv: Cv | null = null;
  today = new Date();
  todoService = inject(TodoService);
  /**
   * La liste des cvs
   */
  cvs: Cv[] = [];
  private loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.log('cc je suis le cvComponent');
  }
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
