import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriaComponent } from './inventario/components/categoria/categoria.component';
import { LayoutComponent } from './layout/layout.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ProductoComponent } from './inventario/components/producto/producto.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "perfil",
        component: PerfilComponent,
        canActivate: [AdminGuard]
      },
      {
        path: "categoria",
        component: CategoriaComponent,
        canActivate: [AdminGuard]
      },
      {
        path: "producto",
        component: ProductoComponent,
        canActivate: [AdminGuard]
      },
      {
        path: "recover",
        loadChildren: () =>
          import('../auth/recover/recover.module').then(m => m.RecoverModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
