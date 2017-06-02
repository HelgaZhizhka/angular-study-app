import { Component, OnInit, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  cardViews: Object = {
    tile: "tile",
    card: "card"
  }

  // @Output()
  // cardViewEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      console.log(chng);

      // let cur  = JSON.stringify(chng.currentValue);
      // let prev = JSON.stringify(chng.previousValue);
      // this.log(`${searchValue}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  // selectCardViewFilm() {
  //   // this.cardViewEvent.emit(this.cardViews);
  // }

}
