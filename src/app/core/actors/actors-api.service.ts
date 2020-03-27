import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorsApiService {

  constructor(private http: HttpClient) { }

  getActors() {
    return this.http.get(`${environment.apiUrl}/actors`);
  }

  getActorDetails(actorId: string) {
    return this.http.get(`${environment.apiUrl}/actors/${actorId}`);
  }
}
