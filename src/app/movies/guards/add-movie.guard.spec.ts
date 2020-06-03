import { TestBed } from '@angular/core/testing';

import { AddMovieGuard } from './add-movie.guard';

describe('AddMovieGuard', () => {
  let guard: AddMovieGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddMovieGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
