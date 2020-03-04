import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { WritersComponent } from './writers/writers.component';
import { DirectorsComponent } from './directors/directors.component';
import { HomeComponent } from './home/home.component';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { ActorsHomeComponent } from './actors/actors-home/actors-home.component';
import { ActorsDetailsComponent } from './actors/actors-details/actors-details.component';
import { WritersHomeComponent } from './writers/writers-home/writers-home.component';
import { WritersDetailsComponent } from './writers/writers-details/writers-details.component';
import { DirectorsHomeComponent } from './directors/directors-home/directors-home.component';
import { DirectorsDetailsComponent } from './directors/directors-details/directors-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    WritersComponent,
    DirectorsComponent,
    HomeComponent,
    MoviesHomeComponent,
    MoviesDetailsComponent,
    ActorsHomeComponent,
    ActorsDetailsComponent,
    WritersHomeComponent,
    WritersDetailsComponent,
    DirectorsHomeComponent,
    DirectorsDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
