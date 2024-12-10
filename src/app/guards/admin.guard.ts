import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.authService.getUserRole().subscribe(
        (role) => {
          if (role === 'admin' || role === '1') { // Ajusta si 'admin' es representado por '1' en tu backend
            observer.next(true);
          } else {
            this.router.navigate(['/home']); // Redirige a 'home' si no es administrador
            observer.next(false);
          }
          observer.complete();
        },
        (error) => {
          console.error('Error al verificar el rol del usuario:', error);
          this.router.navigate(['/home']);
          observer.next(false);
          observer.complete();
        }
      );
    });
  }
}
