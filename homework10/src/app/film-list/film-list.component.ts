import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service';

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList : Object[] = [];
  filmName : string;
  pageNumber: string;
  cardViewRequired: number;
  rowHeightRequired: string;
  loading: boolean;

  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.loading = true;
    this.filmName = "Matrix";
    this.pageNumber = "1";
    this.cardViewRequired = 1;
    this.rowHeightRequired = "1000px";
    this.selectCardView(this.cardViewRequired);
    this.getFilms(this.filmName);
  }

  private getFilms(filmName: string): void {
    if(!this.filmName) {return;}
    this.filmCardService.getFilms(this.filmName, this.pageNumber).subscribe((films: Object[]) => {
      this.filmList = this.filmList.concat(films);
      this.loading = false;
    })
  }

  getNewFilms(filmName: string): void {
    this.filmName = filmName;
    this.pageNumber = "1";
    this.filmList = [];
    this.getFilms(this.filmName);
  }

  addFilms(filmName: string): void {
    if (this.filmName === filmName) {
      this.getFilms(this.filmName);
    } else {
      this.getNewFilms(filmName);
    }
  }

  addMoreFilms(): void {
    this.loading = true;
    this.pageNumber = String(parseInt(this.pageNumber) + 1);
    this.getFilms(this.filmName);
  }

  selectCardView(view: number): void {
    this.cardViewRequired = view;
    this.setRowHeight(view);
  }

  setRowHeight(view: number): void {
    view === 1 ? this.rowHeightRequired = "1000px" : this.rowHeightRequired = "450px";
  }

}
