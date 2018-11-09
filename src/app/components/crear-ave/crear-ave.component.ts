import { Component, OnInit } from '@angular/core';
import { Ave } from '../../models/ave';
import { Pais } from '../../models/pais';
import { AveService } from '../../services/ave.service';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-crear-ave',
  templateUrl: './crear-ave.component.html',
  styleUrls: ['./crear-ave.component.css']
})
export class CrearAveComponent implements OnInit {

  public ave: Ave;
  public pais: Pais;
  public status: String;
  public paises: Pais[];

  constructor(
    private _aveService: AveService,
    private _paisService: PaisService
  ) {
    this.ave = new Ave(0, '', '', []);
    this.pais = new Pais(0, '', 0);
  }

  ngOnInit() {
    this.getPaises();
  }

  getPaises () {
    this._paisService.getAllPaises().subscribe(
      response => {
        if (response) {
          this.paises = response;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this._aveService.addAve(this.ave, this.pais.cdpais).subscribe(
      response => {
        this.ave = response;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
