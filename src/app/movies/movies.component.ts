import { Movie } from '@/app/app.model';
import { MoviesService } from '@/app/core/movies/movies.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  routerSubscription: Subscription;
  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd && event.url === '/movies'))
      .subscribe(() => this.getMovies());
  }

  getMovies() {
    this.movies$ = this.moviesService.getMovies();
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
