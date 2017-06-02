import {Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges  {
  @Input()
  searchValue: string = '';

  // @Output()
  // searchEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('проперти поменялись');
    for (let property in changes) {
      if (property === 'searchValue') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
      }
    }
  }

  // searchFilm(filmName) {
  //   this.searchEvent.emit(this.searchValue);
  // }
}
