import { GetMovies } from './../core/movies/movies.actions';
import { Movie } from '@/app/app.model';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '@/app/app.state';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @Select(AppState.movies) movies$: Observable<Movie[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetMovies());
  }
}
