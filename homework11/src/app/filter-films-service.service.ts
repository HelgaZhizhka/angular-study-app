import { Injectable } from '@angular/core';
import { FILMS } from './filter-films';

@Injectable()
export class FilterFilmsServiceService {
  getFilteredFilms(): Promise<string[]> {
    return Promise.resolve(FILMS);
  }
}