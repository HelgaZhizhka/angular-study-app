import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
  searchUrl: string = "http://www.omdbapi.com/";
  apiKey: string = '520bbe17';
  
  constructor(private http: Http) { }

  private extractListData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms (filmName: string, pageNumber: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('apikey', this.apiKey);
    params.set('page', pageNumber || '1');
    params.set('s', filmName);
    return this.http.get(this.searchUrl, {search: params}).map(this.extractListData);
  }

  getFilmById (filmId: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('i', filmId);
    params.set('apikey', this.apiKey);
    return this.http.get(this.searchUrl, {search: params}).map(this.extractItemData);
  }

}
