import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../../services/simulation.service';
import { GameEvent } from '../../simulation/game-event';
import Team from '../../types/team';

@Component({
  selector: 'app-simulation-container',
  templateUrl: './simulation-container.component.html',
  styleUrls: ['./simulation-container.component.sass'],
  providers: [
    SimulationService
  ]
})
export class SimulationContainerComponent implements OnInit {

  private entries: GameEvent[];
  private teams: Team[];

  constructor(private simulationService: SimulationService) { }

  ngOnInit() {
    this.simulationService.init();
    this.teams = this.simulationService.getTeams();
  }

  run() {
    const simulator = this.simulationService.run();
    const entriesMap = simulator.queue.getResolvedEvents();
    let entries = [];
    entriesMap.forEach(v => entries = entries.concat(v));
    this.entries = entries;
  }

}
