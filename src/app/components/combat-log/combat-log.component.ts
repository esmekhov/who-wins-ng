import { Component, OnInit } from '@angular/core';
import { GameEvent } from '../../simulation/game-event';
import { SimulationService } from '../../services/simulation.service';

@Component({
  selector: 'app-combat-log',
  templateUrl: './combat-log.component.html',
  styleUrls: ['./combat-log.component.sass'],
  providers: [
    SimulationService
  ]
})
export class CombatLogComponent implements OnInit {

  entries: GameEvent[] = [];

  constructor(private simulationService: SimulationService) { }

  ngOnInit() {
    const simulator = this.simulationService.runSimulation();
    const entriesMap = simulator.queue.getResolvedEvents();
    entriesMap.forEach(v => this.entries = this.entries.concat(v));
  }

}
