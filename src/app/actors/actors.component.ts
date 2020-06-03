import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit, OnDestroy {

  actorsSubscription: Subscription;
  actors;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.actorsSubscription = this.route.data.subscribe(({ actors }) => this.actors = actors);
  }

  ngOnDestroy(): void {
    this.actorsSubscription.unsubscribe();
  }

}
