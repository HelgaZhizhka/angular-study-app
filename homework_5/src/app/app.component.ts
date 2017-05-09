import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Film app';
  messageError: string = 'Такого фильма нет';
  subtitle: string = "This is my first angular2 app";
  number: number = 1
}
