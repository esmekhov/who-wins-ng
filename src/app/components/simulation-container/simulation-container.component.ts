import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State, getLayout, getSimulationOptions, getTeams } from '../../reducers';
import { getEdit, Actions, Layout } from '../../reducers/layout';

import { SimulationService } from '../../services/simulation.service';
import { GameEvent } from '../../simulation/game-event';
import Team from '../../types/team';
import { Observable } from 'rxjs';
import { SimulationOptions, Actions as SimActions } from '../../reducers/simulation-options';

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
  private simulationOptions$: Observable<SimulationOptions>;
  private teams$: Observable<Team[]>;

  private options: SimulationOptions;
  private entries: GameEvent[];
  private teams: Team[];

  constructor(private simulationService: SimulationService, private store: Store<State>) {
    this.layout$ = this.store.pipe(select(getLayout));
    this.simulationOptions$ = this.store.pipe(select(getSimulationOptions));
    this.teams$ = this.store.pipe(select(getTeams));
  }

  ngOnInit() {
    this.simulationOptions$.subscribe(o => this.options = o);
    this.teams$.subscribe(t => this.teams = t);

    this.init();
  }

  init() {
    this.simulationService.setTeams(this.teams);
    this.simulationService.init();
    this.entries = [];
    this.teams = this.simulationService.getTeams();
  }

  run(value: boolean) {
    this.simulationService.setMaxTimeMs(this.options.maximumTimeMs);
    this.simulationService.setStepTimeMs(this.options.stepTimeMs);

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

  save(value: SimulationOptions) {
    this.store.dispatch({ type: Actions.SAVE, payload: value });
    this.store.dispatch({ type: SimActions.SET_MAXIMUM_TIME_MS, payload: value });
    this.store.dispatch({ type: SimActions.SET_STEP_TIME_MS, payload: value });
  }

  defaults(value: boolean) {
    this.store.dispatch({ type: SimActions.RESET });
  }

  reset(value: boolean) {
    this.init();
  }

}
