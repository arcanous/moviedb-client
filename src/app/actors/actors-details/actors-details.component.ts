import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from '@/app/core/actors/actors.service';
import { pluck, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-actors-details',
  templateUrl: './actors-details.component.html',
  styleUrls: ['./actors-details.component.scss']
})
export class ActorsDetailsComponent implements OnInit, OnDestroy {

  actorSubscription: Subscription;
  actor;

  constructor(private route: ActivatedRoute, private actorsService: ActorsService) { }

  ngOnInit(): void {
    this.actorSubscription = this.route.params
      .pipe(
        pluck('actorId'),
        filter(actorId => !!actorId),
        switchMap((actorId: string) => this.actorsService.getActorDetails(actorId)),
      ).subscribe(actor => this.actor = actor);
  }

  ngOnDestroy() {
    this.actorSubscription.unsubscribe();
  }

}
