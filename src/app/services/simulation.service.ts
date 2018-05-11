import { Injectable } from '@angular/core';

import { Simulator, SimulatorContext } from '../simulation/simulator';
import { AIPlayer } from '../simulation/player';
import { MyRuleSet } from '../simulation/ruleset';
import { Character } from '../simulation/character';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor() { }

  runSimulation(): Simulator {
    const players = [
        new AIPlayer('red'),
        new AIPlayer('blue')
    ];
    const ruleSet = new MyRuleSet();
    const context = new SimulatorContext();
    ruleSet.setContext(context);
    context.ruleSet = ruleSet;
    context.players = players;

    const simulator = new Simulator(context);
    simulator.init();

    players[0].addCharacter(new Character(100, 4));
    players[1].addCharacter(new Character(100, 5));

    simulator.run();
    return simulator;
  }
}
