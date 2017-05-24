import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList : Object[] = []
  filmName : string;
  pageNumber: string;
  constructor(private filmCardService: FilmService) { }

  ngOnInit() {
    this.filmName = "Matrix";
    this.pageNumber = "1";
    this.getFilms();
  }

  private getFilms(): void {
    if(!this.filmName) {return;}
    this.filmCardService.getFilms(this.filmName, this.pageNumber).subscribe((films: Object[]) => {
      this.filmList = films;
    })
  }
}
