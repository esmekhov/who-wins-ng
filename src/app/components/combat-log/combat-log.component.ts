import { Component, OnInit } from '@angular/core';
import App from '../../simulation/project';
import { GameEvent } from '../../simulation/game-event';

@Component({
  selector: 'app-combat-log',
  templateUrl: './combat-log.component.html',
  styleUrls: ['./combat-log.component.sass']
})
export class CombatLogComponent implements OnInit {

  entries: GameEvent[] = [];

  constructor() { }

  ngOnInit() {
    const app = new App();
    const simulator = app.run();
    const entriesMap = simulator.queue.getResolvedEvents();
    entriesMap.forEach(v => this.entries = this.entries.concat(v));
  }

}
