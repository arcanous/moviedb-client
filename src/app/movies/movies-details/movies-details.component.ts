import { Store } from '@ngxs/store';
import { MoviesService } from '@/app/core/movies/movies.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { pluck, filter, switchMap } from 'rxjs/operators';
import { RemoveMovie } from '@/app/core/movies/movies.actions';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {

  movieSubscription: Subscription;
  movie;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.movieSubscription = this.route.params
      .pipe(
        pluck('movieId'),
        filter(movieId => !!movieId),
        switchMap((movieId: string) => this.moviesService.getMovieDetails(movieId)),
      ).subscribe(movie => this.movie = movie);
  }

  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe();
  }

  remove() {
    if (confirm(`Are you sure you want to remove ${this.movie.details.name} for the database?`)) {
      this.store.dispatch(new RemoveMovie(this.movie.details.id));
    }
  }

  edit() {
    this.router.navigate(['/movies', this.movie.details.id, 'details']);
  }

}
