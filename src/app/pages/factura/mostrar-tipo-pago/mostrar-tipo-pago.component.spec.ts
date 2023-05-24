import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTipoPagoComponent } from './mostrar-tipo-pago.component';

describe('MostrarTipoPagoComponent', () => {
  let component: MostrarTipoPagoComponent;
  let fixture: ComponentFixture<MostrarTipoPagoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarTipoPagoComponent]
    });
    fixture = TestBed.createComponent(MostrarTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
