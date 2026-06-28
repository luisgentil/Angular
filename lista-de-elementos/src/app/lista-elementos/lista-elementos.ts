import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lista-elementos',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-elementos.html',
  styleUrl: './lista-elementos.css',
})
export class listaElementos {

  elementos: string[] = [];

  nuevoElemento: string = '';

  agregarElemento() {
    if (this.nuevoElemento.trim() !== '') {
      this.elementos.push(this.nuevoElemento);
      this.nuevoElemento = '';
    }

  }
}
