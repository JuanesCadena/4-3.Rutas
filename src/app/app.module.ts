import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LibrosComponent } from './libros/libros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppRoutingModule } from './app-routing.module';



import { InicioComponent } from './inicio/inicio.component';


const rutas:Routes = [
  {path:'listado-libros', component: LibrosComponent},
  {path:'', component:InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
  ]

  
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ColoresComponent,
    FirmaComponent,
    CabeceraComponent,
    LibrosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
FormsModule,
RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
