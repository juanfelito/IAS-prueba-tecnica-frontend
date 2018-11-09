import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  public getAllPaises (): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url + 'pais/all', {headers: headers});
  }
}
