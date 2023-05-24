import { TestBed } from '@angular/core/testing';

import { TipoPagosService } from './tipo-pagos.service';

describe('TipoPagosService', () => {
  let service: TipoPagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
