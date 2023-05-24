import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoVentaComponent } from './mostrar-tipo-venta.component';

describe('MostrarTipoVentaComponent', () => {
  let component: MostrarTipoVentaComponent;
  let fixture: ComponentFixture<MostrarTipoVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarTipoVentaComponent]
    });
    fixture = TestBed.createComponent(MostrarTipoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
