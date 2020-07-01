import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { GetMovies, AddMovie, UpdateMovie } from '@/app/core/movies/movies.actions';
import { MoviesService } from '@/app/core/movies/movies.service';
import { tap } from 'rxjs/operators';
import { Movie } from '@/app/app.model';

export interface AppStateModel {
  movies: any[];
  actors: any[];
  writers: any[];
  directors: any[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    movies: [],
    actors: [],
    writers: [],
    directors: [],
  }
})
@Injectable()
export class AppState {
  @Selector() static movies(state: AppStateModel) { return state.movies; }
  @Selector() static actors(state: AppStateModel) { return state.actors; }
  @Selector() static writers(state: AppStateModel) { return state.writers; }
  @Selector() static directors(state: AppStateModel) { return state.directors; }

  constructor(
    private moviesService: MoviesService
  ) {}

  @Action(GetMovies)
  getMovies({ patchState }: StateContext<AppStateModel>) {
    return this.moviesService.getMovies().pipe(tap(movies => patchState({ movies })));
  }

  @Action(AddMovie)
  addMovie(ctx: StateContext<AppStateModel>, { movie }: AddMovie) {
    return this.moviesService.addMovie(movie).pipe(tap((addedMovie: Movie) => {
      const existingMovies = ctx.getState().movies;
      ctx.patchState({
        movies: [
          ...existingMovies,
          addedMovie,
        ]
      });
    }));
  }

  @Action(UpdateMovie)
  updateMovie(ctx: StateContext<AppStateModel>, { movie }: UpdateMovie) {
    return this.moviesService.updateMovie(movie).pipe(tap((updatedMovie: Movie) => {
      const existingMovies = ctx.getState().movies;
      ctx.patchState({
        movies: existingMovies.map(m => m.id === updatedMovie.id ? updatedMovie : m),
      });
    }));
  }
}
