import { inject, Injectable } from "@angular/core";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { API } from "../../../config/api.config";
import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";
import { APP_CONSTANTES } from "../../config/app_const.config";

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

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {}

  isAuthenticated(): boolean {
    return true;
  }

  logout() {
  }
}
