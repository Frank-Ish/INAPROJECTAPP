import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFacturaComponent } from './admin-factura.component';

describe('AdminFacturaComponent', () => {
  let component: AdminFacturaComponent;
  let fixture: ComponentFixture<AdminFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFacturaComponent]
    });
    fixture = TestBed.createComponent(AdminFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
