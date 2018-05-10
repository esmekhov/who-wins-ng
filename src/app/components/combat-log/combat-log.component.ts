import { Component, OnInit } from '@angular/core';
import App from '../../simulation/project';

@Component({
  selector: 'app-combat-log',
  templateUrl: './combat-log.component.html',
  styleUrls: ['./combat-log.component.sass']
})
export class CombatLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const app = new App();
    const simulator = app.run();
    console.log(simulator.queue);
  }

}
