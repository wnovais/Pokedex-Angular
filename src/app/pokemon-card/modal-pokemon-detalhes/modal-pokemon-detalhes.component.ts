import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-modal-pokemon-detalhes',
  templateUrl: './modal-pokemon-detalhes.component.html',
  styleUrls: ['./modal-pokemon-detalhes.component.scss']
})
export class ModalPokemonDetalhesComponent implements OnInit {
  pokemon: string;
  numero: number;
  detalhes;
  constructor(
    public dialogRef: MatDialogRef<ModalPokemonDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public pokeService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemon = this.data.pokemon;
    this.numero = this.data.numero;
    this.obterDetalhes(this.pokemon);
    
  }

  obterDetalhes(pokemon) {
    const req = this.pokeService.carregarDetalhesPokemon(pokemon);
    this.detalhes = req;
  }

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZeros(this.numero);
    
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZeros(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s
    }
    return s;
  }
}
