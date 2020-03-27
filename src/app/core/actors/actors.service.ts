import { ActorsApiService } from './actors-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private actorsApiService: ActorsApiService) { }

  getActors() {
    return this.actorsApiService.getActors();
  }

  getActorDetails(actorId: string) {
    return this.actorsApiService.getActorDetails(actorId);
  }
}
