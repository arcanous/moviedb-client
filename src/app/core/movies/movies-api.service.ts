import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '@/app/app.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get(`${environment.apiUrl}/movies`) as Observable<Movie[]>;
  }

  getMovieDetails(movieId: string) {
    return this.http.get(`${environment.apiUrl}/movies/${movieId}`);
  }

  getMovieActors(movieId: string) {
    return this.http.get(`${environment.apiUrl}/movies/${movieId}/actors`);
  }

  getMovieDirectors(movieId: string) {
    return this.http.get(`${environment.apiUrl}/movies/${movieId}/directors`);
  }

  getMovieWriters(movieId: string) {
    return this.http.get(`${environment.apiUrl}/movies/${movieId}/writers`);
  }

  removeMovie(movieId: string) {
    return this.http.delete(`${environment.apiUrl}/movies/${movieId}`);
  }
}
