import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectPrueba1';
  condicion:boolean =true;
  dias_semana: any;
  vblecolor:any;
  color: any;
  

  libros: any[]; 
  verAutor: any; 


  constructor() {
    this.libros = [
      { id: '1', titulo: 'Te veré bajo el hielo', autor: 'Robert Bryndza' },
      { id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro' },
      { id: '3', titulo: 'El día que se perdió la cordura', autor: 'Javier Castillo' }
    ];
  }

 
  showAuthor(libro: any): void {
    this.verAutor = 'Escrito por: ' + libro.autor;
    alert(this.verAutor);
    console.log(libro.titulo, 'escrito por', libro.autor);
  
}
}
