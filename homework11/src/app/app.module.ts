import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmService } from './film.service';
import { FilmListComponent } from './film-list/film-list.component';
import { SearchComponent } from './search/search.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmListComponent,
    SearchComponent,
    CardViewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
