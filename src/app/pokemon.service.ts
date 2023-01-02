import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];
  detalhes;
  constructor(private httpClient: HttpClient) { 
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const req = await this.httpClient.get<any>(' https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();

    this.pokemons = req.results;
  }

  async carregarDetalhesPokemon(pokemon:string) {
    const req = await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/'+pokemon).toPromise();

    this.detalhes = req;
  }
}
