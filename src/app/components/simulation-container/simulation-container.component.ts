import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State, getLayout } from '../../reducers';
import { getEdit, Actions, Layout } from '../../reducers/layout';

import { SimulationService } from '../../services/simulation.service';
import { GameEvent } from '../../simulation/game-event';
import Team from '../../types/team';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simulation-container',
  templateUrl: './simulation-container.component.html',
  styleUrls: ['./simulation-container.component.sass'],
  providers: [
    SimulationService
  ]
})
export class SimulationContainerComponent implements OnInit {

  private layout$: Observable<Layout>;
  private entries: GameEvent[];
  private teams: Team[];

  constructor(private simulationService: SimulationService, private store: Store<State>) {
    this.layout$ = this.store.pipe(select(getLayout));
  }

  ngOnInit() {
    this.simulationService.init();
    this.teams = this.simulationService.getTeams();
  }

  run(value: boolean) {
    const simulator = this.simulationService.run();
    const entriesMap = simulator.queue.getResolvedEvents();
    let entries = [];
    entriesMap.forEach(v => entries = entries.concat(v));
    this.entries = entries;
    this.teams = this.simulationService.getTeams();
  }

  edit(editMode: boolean) {
    if (editMode) {
      this.store.dispatch({ type: Actions.EDIT });
    } else {
      this.store.dispatch({ type: Actions.CANCEL });
    }
  }

  save() {
    this.store.dispatch({ type: Actions.SAVE });
  }

}
