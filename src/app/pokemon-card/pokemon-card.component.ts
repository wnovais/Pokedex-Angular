import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalPokemonDetalhesComponent } from './modal-pokemon-detalhes/modal-pokemon-detalhes.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  constructor(public dialog: MatDialog) {}
  url: string;

  openDialog(pokemon:string) {

    const dialogRef = this.dialog.open(ModalPokemonDetalhesComponent, {
      data: {pokemon: this.pokemon, numero: this.numero},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  @Input()
  pokemon: string;

  @Input()
  numero: number;

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZeros(this.numero);
    
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  pegarSpritePokemon() {
    const numeroFormatado = this.numero;
    
    return `https://veekun.com/dex/media/pokemon/main-sprites/firered-leafgreen/${numeroFormatado}.png`;
  }

  leadingZeros(str: string | number, size = 3): string {
    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s
    }
    return s;
  }
}

