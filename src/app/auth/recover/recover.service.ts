import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecoverService {
  private apiUrl = 'http://localhost:3000'; // Cambia por tu URL del backend

  constructor(private http: HttpClient) {}

  requestReset(email: string) {
    return this.http.post(`${this.apiUrl}/auth/request-reset`, { email });
  }

  resetPassword(token: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, { token, password });
  }
}
