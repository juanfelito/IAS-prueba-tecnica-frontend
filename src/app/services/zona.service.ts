import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Zona } from '../models/zona';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  public getAllZonas (): Observable <any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');

    return this._http.get(this.url + 'zona/all', {headers: headers});
  }
}
