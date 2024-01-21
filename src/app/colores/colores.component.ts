import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  colorLocal:String= "Hola";

  constructor(){}

  ngOnInit(): void {
    
  }
  numaleatorio:Number=Math.floor(Math.random()*10);

  generarAleatorio():String{
    return Math.floor(Math.random()*255).toString(16);
  }
  
  colorHex():String{
    this.colorLocal= '#' + this.generarAleatorio()+this.generarAleatorio()+this.generarAleatorio();
  return this.colorLocal;
  }

}
