import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  authService = inject(AuthService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    // this.cv = this.cvService.findCvById(id);
    this.cvService.getCvByIdFromApi(id).subscribe({
      next: (cvFromApi) => (this.cv = cvFromApi),
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }

  delete() {
    if (this.cv) {
      this.cvService.deleteCvByIdFromApi(this.cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cv]),
        error: (e) => {
          console.log({ e });
        },
      });
    }
  }
}
