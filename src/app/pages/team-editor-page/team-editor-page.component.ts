import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import Team from '../../types/team';
import { SimulationService } from '../../services/simulation.service';
import { State, getLayout, getSimulationOptions, getTeams } from '../../reducers';
import { getTeam } from '../../reducers/teams';

@Component({
  selector: 'app-team-editor-page',
  templateUrl: './team-editor-page.component.html',
  styleUrls: ['./team-editor-page.component.sass']
})
export class TeamEditorPageComponent implements OnInit {

  private teamName$: Observable<string>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.teamName$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('name'))
    );
  }

}
