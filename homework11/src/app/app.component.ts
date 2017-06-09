import { Component, ViewChild, Inject, HostListener, OnInit } from '@angular/core';
import { FilmListComponent } from './film-list/film-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: Window, useValue: window }
  ]
})

export class AppComponent implements OnInit {
  title: string = 'Каталог фильмов';
  showBtn: boolean;
  @ViewChild(FilmListComponent)
  filmListComponent: FilmListComponent;

  constructor(
      @Inject(Window) private window: Window,
  ) { }

  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/filmList', icon: 'view_list', label: 'Все фильмы'},
    { path: '/profile', icon: 'account_box', label: 'Профиль'}
  ];

  ngOnInit() {
    this.showBtn = false;
  }

  @HostListener('window:scroll')
  public onScrollPage() {
    console.log(window.pageYOffset);
    let number = this.window.document.body.querySelector('.container').scrollTop;
    console.log(number);
    if (number > 100) {
      this.showBtn = true;
    } else if (this.showBtn && number < 10) {
      this.showBtn = false;
    }
  }

  addFilms(filmName) {
    this.filmListComponent.addFilms(filmName);
  }
  selectCardView(number) {
    this.filmListComponent.selectCardView(number);
  }
  goTop() {
    this.window.document.documentElement.style.height = "auto";
    this.window.document.body.scrollTop = 0;
    this.window.document.documentElement.removeAttribute("style");
  }
}
