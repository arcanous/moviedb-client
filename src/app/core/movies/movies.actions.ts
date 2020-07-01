import { Movie } from '@/app/app.model';

export class GetMovies {
  static readonly type = '[AppState] Get Movies';
}

export class AddMovie {
  static readonly type = '[AppState] Add Movie';
  constructor(public movie: Movie) {}
}

export class UpdateMovie {
  static readonly type = '[AppState] Update Movie';
  constructor(public movie: Movie) {}
}
