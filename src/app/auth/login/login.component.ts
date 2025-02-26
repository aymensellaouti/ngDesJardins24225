import { Component, inject } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toaster = inject(ToastrService);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: (loginResponse) => {
        this.authService.saveToken(loginResponse.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      }
    })
  }

}
