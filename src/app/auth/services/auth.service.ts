import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_CONSTANTES } from "src/app/config/app-constantes.config";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { APP_API } from "src/app/config/app-api.config";
import { Observable } from "rxjs";


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

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    this.http.post(APP_API.logout, {}).subscribe();
    this.removeToken();
  }
}
