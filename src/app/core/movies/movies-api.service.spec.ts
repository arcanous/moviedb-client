import { TestBed } from '@angular/core/testing';

import { MoviesApiService } from './movies-api.service';

describe('MoviesApiService', () => {
  let service: MoviesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
