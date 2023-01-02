import { TestBed } from '@angular/core/testing';

import { PokemonDetalhesService } from './pokemon-detalhes.service';

describe('PokemonDetalhesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDetalhesService = TestBed.get(PokemonDetalhesService);
    expect(service).toBeTruthy();
  });
});
