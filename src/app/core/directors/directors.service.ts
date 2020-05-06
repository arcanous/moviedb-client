import { DirectorsApiService } from './directors-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  constructor(private directorsApiService: DirectorsApiService) { }

  getDirectors() {
    return this.directorsApiService.getDirectors();
  }
}
