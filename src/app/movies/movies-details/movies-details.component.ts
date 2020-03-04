import { MoviesService } from './../../core/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { pluck, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  routeSub: Subscription;
  movie$;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie$ = this.route.params
      .pipe(
        pluck('movieId'),
        filter(movieId => !!movieId),
        switchMap((movieId: string) => this.moviesService.getMovieDetails(movieId)),
      );
  }


}
