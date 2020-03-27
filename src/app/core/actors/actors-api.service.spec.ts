import { TestBed } from '@angular/core/testing';

import { ActorsApiService } from './actors-api.service';

describe('ActorsApiService', () => {
  let service: ActorsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
