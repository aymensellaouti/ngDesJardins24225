import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONSTANTES } from "src/app/config/app-constantes.config";


export class ConnectedUser {
  constructor(public id: number, public email: string) {}
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private http = inject(HttpClient);

  saveToken(token: string) {
    localStorage.setItem(APP_CONSTANTES.token, token);
  }

  getToken(): string {
    return localStorage.getItem(APP_CONSTANTES.token) ?? "";
  }

  removeToken() {
    localStorage.removeItem(APP_CONSTANTES.token);
  }

  // login(credentials: CredentialsDto): Observable<LoginResponseDto> {}

  isAuthenticated(): boolean {
    return true;
  }

  logout() {
  }
}
