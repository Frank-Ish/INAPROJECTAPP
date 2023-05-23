import { TestBed } from '@angular/core/testing';

import { TipoCLienteService } from './tipo-cliente.service';

describe('TipoCLienteService', () => {
  let service: TipoCLienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoCLienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
