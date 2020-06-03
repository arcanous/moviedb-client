import { UnsavedChangesService } from './../../core/unsaved-changes/unsaved-changes.service';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@/app/core/movies/movies.service';
import { Movie } from '@/app/app.model';
import { take, pluck, filter, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorsService } from '@/app/core/actors/actors.service';
import { DirectorsService } from '@/app/core/directors/directors.service';
import { WritersService } from '@/app/core/writers/writers.service';
import { Subscription } from 'rxjs';

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

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private actorsService: ActorsService,
    private directorsService: DirectorsService,
    private writersService: WritersService,
    private route: ActivatedRoute,
    private unsavedChangesService: UnsavedChangesService,
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

    this.mode = this.route.routeConfig.data.mode;
  }

  save() {
    if (this.mode === 'add') {
      this.moviesService.addMovie(this.movie)
        .pipe(take(1))
        .subscribe(({ id }: Movie) => {
          this.moviesService.moviesListUpdated$.next();
          this.router.navigate(['/movies', id]);
        });
    } else if (this.mode === 'edit') {
      this.moviesService.updateMovie(this.movie)
        .pipe(take(1))
        .subscribe(({ id }: Movie) => {
          this.moviesService.moviesListUpdated$.next();
          this.router.navigate(['/movies', id]);
        });
    }
  }

  cantBeSaved() {
    let cantBeSaved;

    if (this.mode === 'add') {
      cantBeSaved = !this.movie.name || !this.movie.year || !this.movie.plot;
    } else if (this.mode === 'edit') {
      cantBeSaved = JSON.stringify(this.movie) === JSON.stringify(this.movieFromDb);
    }

    this.unsavedChangesService.hasUnsavedChanges = !cantBeSaved;

    return cantBeSaved;
  }

}
