import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrearAveComponent } from './components/crear-ave/crear-ave.component';
import { ListarAvesComponent } from './components/listar-aves/listar-aves.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAveComponent,
    ListarAvesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
