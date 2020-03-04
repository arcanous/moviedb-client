import { Movie } from './../app.model';
import { switchMap, map } from 'rxjs/operators';
import { MoviesApiService } from './movies-api.service';
import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private moviesApiService: MoviesApiService) { }

  getMovies() {
    return this.moviesApiService.getMovies();
  }

  getMovieDetails(movieId: string) {
    return this.moviesApiService.getMovieDetails(movieId)
      .pipe(
        switchMap((movie: Movie) => forkJoin({
          details: of(movie),
          actors: this.moviesApiService.getMovieActors(movieId),
          directors: this.moviesApiService.getMovieDirectors(movieId),
          writers: this.moviesApiService.getMovieWriters(movieId),
        }),
      ));
  }
}
