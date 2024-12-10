import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://127.0.0.1:3000"; // Base URL del backend

  constructor(private http: HttpClient) { }

  // Método de login
  loginConNest(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales);
  }

  // Método de registro
  registroConNest(datos: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, datos);
  }

  // Método para obtener el rol del usuario desde el token JWT almacenado
  getUserRole(): Observable<string> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.get<string>(`${this.baseUrl}/auth/role`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    return new Observable<string>((observer) => observer.next(''));
  }

  // Método para cerrar sesión (eliminar el token)
  logout() {
    localStorage.removeItem('token');
  }
}
