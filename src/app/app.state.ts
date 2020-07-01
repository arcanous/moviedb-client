import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { GetMovies } from '@/app/core/movies/movies.actions';
import { MoviesService } from '@/app/core/movies/movies.service';
import { tap } from 'rxjs/operators';

export interface AppStateModel {
  movies: any[];
  actors: any[];
  writers: any[];
  directors: any[];
}

@State<AppStateModel>({
  name: 'animals',
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

  constructor(private moviesService: MoviesService) {}

  @Action(GetMovies)
  getMovies({ patchState }: StateContext<AppStateModel>) {
    return this.moviesService.getMovies().pipe(tap(movies => patchState({ movies })));
  }
}
