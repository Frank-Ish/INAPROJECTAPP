import { TestBed } from '@angular/core/testing';

import { TipoVentaService } from './tipo-venta.service';

describe('TipoVentaService', () => {
  let service: TipoVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
