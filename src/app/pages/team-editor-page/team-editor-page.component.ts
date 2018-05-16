import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  private team: Team;
  private team$: Observable<Team>;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.team$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.store.pipe(select(getTeams), select(getTeam(params.get('name')))))
    );
  }

}
