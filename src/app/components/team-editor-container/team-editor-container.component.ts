import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import Team from '../../types/team';

import { SimulationService } from '../../services/simulation.service';
import { State, getLayout, getSimulationOptions, getTeams } from '../../reducers';
import { getTeam } from '../../reducers/teams';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-editor-container',
  templateUrl: './team-editor-container.component.html',
  styleUrls: ['./team-editor-container.component.sass']
})
export class TeamEditorContainerComponent implements OnInit {

  private _teamName: string;
  private team$: Observable<Team>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  @Input()
  set teamName(teamName: string) {
    this._teamName = teamName;
    this.team$ = this.store.pipe(select(getTeams), select(getTeam(this.teamName)));
  }

  get teamName() {
    return this._teamName;
  }

}
