import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  cardsView: number;
  @Output()
  selectCardView = new EventEmitter<number>();


  constructor() { }

  selectNewCardView(): void {
    this.selectCardView.emit(this.cardsView);
  }
}
