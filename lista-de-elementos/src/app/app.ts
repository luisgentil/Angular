import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { listaElementos } from './lista-elementos/lista-elementos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, listaElementos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lista-de-elementos');
  nombre = 'Lista de elementos'; 
  descripcion = 'Proyecto 1 del curso de Angular FUNDAE';
}
