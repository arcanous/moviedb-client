import { ActorsService } from './actors.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActorsResolver implements Resolve<Observable<any>> {
 constructor(private actorsService: ActorsService) {}

 resolve(): Observable<any> {
   return this.actorsService.getActors();
 }
}
