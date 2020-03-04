import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`${environment.apiUrl}/movies`);
  }

  getMovieDetails(movieId: string) {
    return this.http.get(`${environment.apiUrl}/movies/${movieId}`);
  }
}
