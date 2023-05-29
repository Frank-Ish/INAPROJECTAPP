import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoClienteComponent } from './admin-tipo-cliente.component';

describe('AdminTipoClienteComponent', () => {
  let component: AdminTipoClienteComponent;
  let fixture: ComponentFixture<AdminTipoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTipoClienteComponent]
    });
    fixture = TestBed.createComponent(AdminTipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
