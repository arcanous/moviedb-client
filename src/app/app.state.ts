import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { GetMovies, AddMovie, UpdateMovie, RemoveMovie } from '@/app/core/movies/movies.actions';
import { MoviesService } from '@/app/core/movies/movies.service';
import { tap } from 'rxjs/operators';
import { Movie } from '@/app/app.model';
import { SetUnsavedChanges } from './app.actions';

export interface AppStateModel {
  movies: any[];
  actors: any[];
  writers: any[];
  directors: any[];
  unsavedChanges: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    movies: [],
    actors: [],
    writers: [],
    directors: [],
    unsavedChanges: false,
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
      ctx.dispatch(new SetUnsavedChanges(false));
      ctx.dispatch(new Navigate(['/movies', addedMovie.id]));
    }));
  }

  @Action(UpdateMovie)
  updateMovie(ctx: StateContext<AppStateModel>, { movie }: UpdateMovie) {
    return this.moviesService.updateMovie(movie).pipe(tap((updatedMovie: Movie) => {
      const existingMovies = ctx.getState().movies;
      ctx.patchState({
        movies: existingMovies.map(m => m.id === updatedMovie.id ? updatedMovie : m),
      });

      ctx.dispatch(new SetUnsavedChanges(false));
      ctx.dispatch(new Navigate(['/movies', updatedMovie.id]));
    }));
  }

  @Action(RemoveMovie)
  removeMovie(ctx: StateContext<AppStateModel>, { movieId }: RemoveMovie) {
    return this.moviesService.removeMovie(movieId).pipe(tap(() => {
      const existingMovies = ctx.getState().movies;
      ctx.patchState({
        movies: existingMovies.filter(m => m.id !== movieId),
      });

      ctx.dispatch(new Navigate(['/movies']));
    }));
  }

  @Action(SetUnsavedChanges)
  setUnsavedChanges({ patchState }: StateContext<AppStateModel>, { unsavedChanges }: SetUnsavedChanges) {
    return patchState({ unsavedChanges });
  }
}
