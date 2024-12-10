import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CategoriaService } from './services/categoria.service';
import { HttpClientModule } from '@angular/common/http';
//import { TableModule } from 'primeng/table';
//import { DialogModule } from 'primeng/dialog';
//import { ButtonModule } from 'primeng/button';
//import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // <-- Agregar FormsModule aquí
import { PrimengModule } from '../../primeng/primeng.module';
//import {Toolbar} from 'primeng/toolbar'



@NgModule({
  declarations: [
    ProductoComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    //TableModule,
    //DialogModule,
    //ButtonModule,
    //InputTextModule,
    ReactiveFormsModule,
    //ToolBarModule,
    PrimengModule,
    FormsModule
  ]
})
export class InventarioModule { }
