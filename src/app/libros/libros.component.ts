import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
verAutor: any;
libros: Array<any>;

constructor() {
this.libros =[
  {id:'1', titulo: 'la bestia', autor:'Carmen Mola'},
  {id:'2', titulo: 'Últimos días en Berlín', autor:'Paloma Sánchez'},
  {id:'3', titulo: 'El infinito en un juicio', autor:'Irene Vallejo'}
];
}
showAuthor(_libro:any){
  this.verAutor = 'Escrito por ' + _libro.autor;
  alert(this.verAutor);
}

ngOninit():void {

}

}
