import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@/app/core/movies/movies.service';
import { Movie } from '@/app/app.model';
import { pluck, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from '@/app/core/actors/actors.service';
import { DirectorsService } from '@/app/core/directors/directors.service';
import { WritersService } from '@/app/core/writers/writers.service';
import { Subscription } from 'rxjs';
import { AddMovie, UpdateMovie } from '@/app/core/movies/movies.actions';
import { SetUnsavedChanges } from '@/app/app.actions';
import { get } from 'lodash-es';

@Component({
  selector: 'app-movies-details-edit',
  templateUrl: './movies-details-edit.component.html',
  styleUrls: ['./movies-details-edit.component.scss']
})
export class MoviesDetailsEditComponent implements OnInit {

  movieDetailsSubscription: Subscription;
  actors$;
  directors$;
  writers$;
  movie: Movie = {
    id: null,
    name: '',
    year: null,
    plot: '',
    actors: [],
    directors: [],
    writers: [],
  };
  mode;
  movieFromDb;
  hadUnsavedChanges = false;

  constructor(
    private moviesService: MoviesService,
    private actorsService: ActorsService,
    private directorsService: DirectorsService,
    private writersService: WritersService,
    private route: ActivatedRoute,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.actors$ = this.actorsService.getActors();
    this.directors$ = this.directorsService.getDirectors();
    this.writers$ = this.writersService.getWriters();

    this.movieDetailsSubscription = this.route.params
      .pipe(
        pluck('movieId'),
        filter(movieId => !!movieId),
        switchMap((movieId: string) => this.moviesService.getMovieDetails(movieId)),
      ).subscribe(({ details }) => {
        this.movie = details as Movie;
        this.movieFromDb = JSON.parse(JSON.stringify(details));
      });

    this.mode = get(this.route, 'routeConfig.data.mode', 'edit');
  }

  save() {
    this.store.dispatch(this.mode === 'add' ? new AddMovie(this.movie) : new UpdateMovie(this.movie));
  }

  cantBeSaved() {
    let cantBeSaved;

    if (this.mode === 'add') {
      cantBeSaved = !this.movie.name || !this.movie.year || !this.movie.plot;
      const hasUC = !!this.movie.name
        || !!this.movie.year
        || !!this.movie.plot
        || ['actors', 'directors', 'writers'].some(persons => this.movie[persons].length > 0);

      if (hasUC !== this.hadUnsavedChanges) {
        this.store.dispatch(new SetUnsavedChanges(hasUC));
        this.hadUnsavedChanges = hasUC;
      }

    } else if (this.mode === 'edit') {
      cantBeSaved = JSON.stringify(this.movie) === JSON.stringify(this.movieFromDb);
      const hasUC = !cantBeSaved;

      if (hasUC !== this.hadUnsavedChanges) {
        this.store.dispatch(new SetUnsavedChanges(hasUC));
        this.hadUnsavedChanges = hasUC;
      }
    }

    return cantBeSaved;
  }

}
