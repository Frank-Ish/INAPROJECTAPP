import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaModule } from './pages/factura/factura.module';
import { ProductosModule } from './pages/productos/productos.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { TipoClienteModule } from './pages/tipo-cliente/tipo-cliente.module';
import { FacturacionModule } from './pages/facturacion/facturacion.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      }),
    FacturaModule,
    ProductosModule,
    TipoClienteModule,
    FacturacionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
