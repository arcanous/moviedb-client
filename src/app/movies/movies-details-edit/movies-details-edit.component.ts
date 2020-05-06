import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@/app/core/movies/movies.service';
import { Movie } from '@/app/app.model';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-details-edit',
  templateUrl: './movies-details-edit.component.html',
  styleUrls: ['./movies-details-edit.component.scss']
})
export class MoviesDetailsEditComponent implements OnInit {

  movie: Movie = {
    id: null,
    name: '',
    year: null,
    plot: '',
    actors: [],
    directors: [],
    writers: [],
  };

  constructor(private moviesService: MoviesService, private router: Router,) { }

  ngOnInit(): void {
  }

  add() {
    this.moviesService.addMovie(this.movie)
      .pipe(take(1))
      .subscribe(({ id }: Movie) => {
        this.moviesService.moviesUpdated$.next();
        this.router.navigate(['/movies', id]);
      });
  }

}
