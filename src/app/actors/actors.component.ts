import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActorsService } from '@/app/core/actors/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ actors }) => this.actors = actors);
  }

}
