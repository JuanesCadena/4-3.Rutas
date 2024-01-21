import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit   {
  numaleatorio:Number=Math.floor(Math.random()*10);
  mirojo:String="red";
  constructor(){}
ngOnInit(): void {
  
}

generarAleatorio():String{
  return Math.floor(Math.random()*255).toString(16);
}

colorHex():String{
  return '#' + this.generarAleatorio()+this.generarAleatorio()+this.generarAleatorio();
}
}
