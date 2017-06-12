import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {FormControl} from "@angular/forms";

import { FilterFilmsServiceService } from '../filter-films-service.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FilterFilmsServiceService]
})
export class SearchComponent implements OnInit  {
  searchValue: string = '';
  @Output()
  getFilms = new EventEmitter<string>();

  control : FormControl;
  filterFilmsName: any;
  films: string[] = [];

  constructor(private filterFilmsServiceService: FilterFilmsServiceService) { }
  ngOnInit() {
    this.control = new FormControl();
    this.getFilteredFilms();
    this.filterFilmsName = this.control.valueChanges
        .startWith(null)
        .map(searchValue => this.filter(searchValue));
  }

  getFilteredFilms(): void {
    this.filterFilmsServiceService.getFilteredFilms().then(films => this.films = films);
  }
  filter(searchValue: string): string[] {
    return searchValue ? this.films.filter(option => new RegExp(`^${searchValue}`, 'gi').test(option)): this.films;
  }

  getNewFilms(): void {
    this.getFilms.emit(this.searchValue);
  }
}
