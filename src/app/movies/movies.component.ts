import { Movie } from '@/app/app.model';
import { MoviesService } from '@/app/core/movies/movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }

}
