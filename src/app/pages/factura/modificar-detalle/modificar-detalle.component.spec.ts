import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDetalleComponent } from './modificar-detalle.component';

describe('ModificarDetalleComponent', () => {
  let component: ModificarDetalleComponent;
  let fixture: ComponentFixture<ModificarDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarDetalleComponent]
    });
    fixture = TestBed.createComponent(ModificarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
