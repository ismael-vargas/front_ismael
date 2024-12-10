import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('../admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'login' // Redirección por defecto a 'login' si la ruta no coincide
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
