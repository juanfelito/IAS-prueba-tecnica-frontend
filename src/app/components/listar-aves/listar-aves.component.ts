import { Component, OnInit } from '@angular/core';
import { Ave } from '../../models/ave';
import { Pais } from '../../models/pais';
import { Zona } from '../../models/zona';
import { AveService } from '../../services/ave.service';
import { PaisService } from '../../services/pais.service';
import { ZonaService } from '../../services/zona.service';

@Component({
  selector: 'app-listar-aves',
  templateUrl: './listar-aves.component.html',
  styleUrls: ['./listar-aves.component.css']
})
export class ListarAvesComponent implements OnInit {

  public aves: Ave[];
  public ave: Ave;
  public paises: Pais[];
  public pais: Pais;
  public filtroNombre: string;
  public zonas: Zona[];
  public zona: Zona;

  constructor(
    private _aveService: AveService,
    private _paisService: PaisService,
    private _zonaService: ZonaService
  ) {
    this.ave = new Ave(0, '', '', []);
    this.pais = new Pais(0, '', 0);
    this.zona = new Zona(0, '');
    this.filtroNombre = '';
  }

  ngOnInit() {
    this.getZonas();
    this.getPaises();
  }

  getAves() {
    this._aveService.getAllAves().subscribe(
      response => {
        if (response) {
          this.aves = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getAve(id: number) {
    this._aveService.getAve(id).subscribe(
      response => {
        if (response) {
          this.ave = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  updateModal (id: number) {
    this.getAve(id);
  }

  deleteAve(_id: number) {
    this._aveService.deleteAve(_id).subscribe(
      response => {
        if (response.respuesta) {
          console.log(response.respuesta);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getPaises () {
    this._paisService.getAllPaises().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.paises = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getZonas () {
    this._zonaService.getAllZonas().subscribe(
      response => {
        if (response) {
          console.log(response);
          this.zonas = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  buscar() {
    this.getAves();
  }

  onSubmit(form) {
    this._aveService.updateAve(this.ave, this.pais.cdpais).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
