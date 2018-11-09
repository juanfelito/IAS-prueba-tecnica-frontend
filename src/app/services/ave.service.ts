import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Ave } from '../models/ave';

@Injectable({
  providedIn: 'root'
})
export class AveService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  public addAve (ave: Ave, cdpais: number): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    const params = {dsnombre_comun: ave.dsnombre_comun, dsnombre_cientifico: ave.dsnombre_cientifico, cdave: ave.cdave};

    return this._http.post(this.url + 'ave/add/' + cdpais, params, {headers: headers});
  }

  public updateAve (ave: Ave, cdpais: number): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    const params = {dsnombre_comun: ave.dsnombre_comun, dsnombre_cientifico: ave.dsnombre_cientifico, cdave: ave.cdave};

    return this._http.put(this.url + 'ave/' + cdpais, params, {headers: headers});
  }

  public deleteAve (_id: number): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.delete(this.url + 'ave/' + _id, {headers: headers});
  }

  public getAve (id: number): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url + 'ave/' + id, {headers: headers});
  }

  public getAllAves (): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url + 'ave/all', {headers: headers});
  }
}
