import { TestBed } from '@angular/core/testing';
import { instance, mock } from 'ts-mockito';

import { MoviesService } from './movies.service';
import { MoviesApiService } from './movies-api.service';

const MoviesApiServiceMock = mock(MoviesApiService);

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MoviesApiService, useValue: instance(MoviesApiServiceMock) }
      ]
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
