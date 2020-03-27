import { MoviesService } from '@/app/core/movies/movies.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { pluck, filter, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit, OnDestroy {

  movieSubscription: Subscription;
  movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

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


}
