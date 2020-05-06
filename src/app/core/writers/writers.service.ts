import { WritersApiService } from './writers-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor(private writersApiService: WritersApiService) { }

  getWriters() {
    return this.writersApiService.getWriters();
  }
}
