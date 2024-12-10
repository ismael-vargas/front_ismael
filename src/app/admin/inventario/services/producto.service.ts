import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = environment.urlServidor;
  private http = inject(HttpClient);

  // Obtener productos
  funListar() {
    return this.http.get(`${this.baseUrl}/producto/back`);
  }

  // Guardar un producto
  funGuardar(registro: any) {
    return this.http.post(`${this.baseUrl}/producto`, registro);
  }

  // Modificar un producto
  funModificar(id: number, registro: any) {
    return this.http.patch(`${this.baseUrl}/producto/${id}`, registro);
  }

  // Eliminar un producto
  funEliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/producto/${id}`);
  }
}
