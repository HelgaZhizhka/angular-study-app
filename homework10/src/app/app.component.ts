import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Каталог фильмов';
  // filmName: string = '';
  constructor() {}

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'view_list', label: 'Все фильмы'},
    { path: '/profile', icon: 'account_box', label: 'Профиль'}
  ];

  searchFilm(filmame) {
    // this.srcFilmValue = filmame;
  }

}
