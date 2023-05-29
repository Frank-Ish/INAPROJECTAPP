import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoClienteRoutingModule } from './tipo-cliente-routing.module';

import { AdminTipoClienteComponent } from './admin-tipo-cliente/admin-tipo-cliente.component';
import { TipoClienteComponent } from './tipo-cliente.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TipoClienteComponent,
    AdminTipoClienteComponent
  ],
  imports: [
    CommonModule,
    TipoClienteRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TipoClienteModule { }
