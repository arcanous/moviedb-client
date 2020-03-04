import { MoviesApiService } from './movies-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private moviesApiService: MoviesApiService) { }

  getMovies() {
    return this.moviesApiService.getMovies();
  }

  getMovieDetails(movieId: string) {
    return this.moviesApiService.getMovieDetails(movieId);
  }
}
