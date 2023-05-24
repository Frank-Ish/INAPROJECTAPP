import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProductoComponent } from './mostrar-producto.component';

describe('MostrarProductoComponent', () => {
  let component: MostrarProductoComponent;
  let fixture: ComponentFixture<MostrarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarProductoComponent]
    });
    fixture = TestBed.createComponent(MostrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
