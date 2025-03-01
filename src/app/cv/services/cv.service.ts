import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { APP_CONSTANTES } from 'src/app/config/app-constantes.config';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    new Cv(1, 'aymen', 'sellaouti', 'teacher', '1234', 40, 'as.jpg'),
    new Cv(2, 'skander', 'sellaouti', 'enfant', '1234', 4, ''),
    new Cv(3, 'Adebayo', 'Lakatan', 'Dev', '12345', 20, '               '),
    new Cv(
      4,
      'Cedric',
      'Potvin',
      'Dev',
      '12346',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(
      5,
      'Jeremy',
      'Huard',
      'Dev',
      '123461',
      20,
      'rotating_card_profile2.png'
    ),
    new Cv(
      6,
      'Maha',
      'Ghozzi',
      'Dev',
      '123462',
      20,
      'rotating_card_profile.png'
    ),
    new Cv(
      7,
      'Olivier',
      'Gauthier',
      'Dev',
      '123463',
      20,
      'rotating_card_profile2.png'
    ),
    new Cv(
      8,
      'Omar',
      'Mekni',
      'Dev',
      '123464',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(
      9,
      'Soufiane',
      'El Alami',
      'Dev',
      '123468',
      20,
      'rotating_card_profile2.png'
    ),
    new Cv(
      10,
      'Vincent',
      'Huneault',
      'Dev',
      '123469',
      20,
      'rotating_card_profile3.png'
    ),
    new Cv(
      11,
      'Wafaa',
      'Salah',
      'Dev',
      '123467',
      20,
      'rotating_card_profile.png'
    ),
  ];
  http = inject(HttpClient);
  authService = inject(AuthService);
  private selectCvSubject$ = new Subject<Cv>();
  /**
   * Le flux des cvs sélectionnées : Cv1, Cv4, Cv10, ...
   */
  selectedCv$ = this.selectCvSubject$.asObservable();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvsFromApi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  getCvByIdFromApi(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  deleteCvByIdFromApi(id: number): Observable<{count: number}> {
    //const headers = new HttpHeaders().set(APP_CONSTANTES.authHeadersName, this.authService.getToken())
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Ajouter un cv au flux des cvs sélectionnés
   * @param cv : le cv à ajouter au flux
   */
  selectCv(cv: Cv) {
    this.selectCvSubject$.next(cv);
  }
}
