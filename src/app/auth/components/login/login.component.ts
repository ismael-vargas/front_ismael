import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { jwtDecode } from 'jwt-decode'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  // Definición del formulario de inicio de sesión
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  // Función para gestionar el inicio de sesión
  funIngresar() {
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Formulario inválido',
        detail: 'Por favor, completa todos los campos correctamente.'
      });
      return;
    }

    // Llamamos al servicio de autenticación con el método 'loginConNest'
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res) => {
        console.log("Respuesta exitosa:", res);

        const token = res.access_token; // Aquí obtenemos el token del objeto de respuesta
        if (token) {
          // Guarda el token JWT en el localStorage
          localStorage.setItem('token', token);

          // Decodificamos el token para obtener el rol del usuario
          const decodedToken: any = jwtDecode(token);
          const role = decodedToken.role;

          // Mostramos un mensaje de bienvenida
          this.messageService.add({
            severity: 'success',
            summary: 'Bienvenido',
            detail: `Bienvenido ${role === '1' ? 'Administrador' : 'Usuario'}`
          });

          // Redirige al usuario según el rol
          this.redirectToRoleBasedPage(role);

        } else {
          // Si no recibimos un token válido, mostramos un error
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se recibió un token válido.'
          });
        }
      },
      (error) => {
        console.error("Error al iniciar sesión:", error);

        // Manejamos el error dependiendo del código de estado de la respuesta
        if (error.status === 404) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Usuario no encontrado.'
          });
        } else if (error.status === 401) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Contraseña incorrecta.'
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Hubo un error al iniciar sesión. Verifica tus credenciales.'
          });
        }
      }
    );
  }

  // Función para redirigir según el rol
  private redirectToRoleBasedPage(role: string) {
    if (role === '1') {  // Si el rol es '1', es un administrador
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);  // Si no, se redirige al home
    }
  }
}
