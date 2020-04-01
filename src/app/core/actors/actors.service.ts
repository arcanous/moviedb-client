import { ActorsApiService } from './actors-api.service';
import { Injectable } from '@angular/core';
import { MoviesApiService } from '@/app/core/movies/movies-api.service';
import { switchMap, catchError, filter } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private actorsApiService: ActorsApiService, private moviesApiService: MoviesApiService) { }

  getActors() {
    return this.actorsApiService.getActors();
  }

  getActorDetails(actorId: string) {
    return this.actorsApiService.getActorDetails(actorId)
      .pipe(switchMap((actor: any) => forkJoin({
        details: of(actor),
        movies: forkJoin(
          ...actor.movies.map(movieId =>
              this.moviesApiService.getMovieDetails(movieId)
                .pipe(catchError(() => of({ deleted: true })))
            )
        ),
      })));
  }

}
