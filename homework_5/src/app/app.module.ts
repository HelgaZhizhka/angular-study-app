import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
