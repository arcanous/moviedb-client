import { Movie } from '@/app/app.model';
import { switchMap, map } from 'rxjs/operators';
import { MoviesApiService } from './movies-api.service';
import { Injectable } from '@angular/core';
import { forkJoin, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private moviesApiService: MoviesApiService) { }

  getMovies(): Observable<Movie[]> {
    return this.moviesApiService.getMovies();
  }

  getMovieDetails(movieId: string) {
    return forkJoin({
      details: this.moviesApiService.getMovieDetails(movieId),
      actors: this.moviesApiService.getMovieActors(movieId),
      directors: this.moviesApiService.getMovieDirectors(movieId),
      writers: this.moviesApiService.getMovieWriters(movieId),
    });
  }
}
