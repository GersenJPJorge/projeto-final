import { TestBed } from '@angular/core/testing';

import { ConversorService } from './conversor.service';
import { HttpClientModule } from '@angular/common/http';
import { MoedaService } from './moeda.service';

describe('ConversorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
//      MoedaService,
      ConversorService,
    ],
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: ConversorService = TestBed.get(ConversorService);
    expect(service).toBeTruthy();
  });
});
