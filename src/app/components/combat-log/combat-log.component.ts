import { Component, OnInit, Input } from '@angular/core';
import { GameEvent } from '../../simulation/game-event';

@Component({
  selector: 'app-combat-log',
  templateUrl: './combat-log.component.html',
  styleUrls: ['./combat-log.component.sass']
})
export class CombatLogComponent implements OnInit {

  @Input() entries: GameEvent[] = [];

  constructor() { }

  ngOnInit() {
  }

}
