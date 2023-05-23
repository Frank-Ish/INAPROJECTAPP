import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProductosComponent } from './buscar-productos.component';

describe('BuscarProductosComponent', () => {
  let component: BuscarProductosComponent;
  let fixture: ComponentFixture<BuscarProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarProductosComponent]
    });
    fixture = TestBed.createComponent(BuscarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
