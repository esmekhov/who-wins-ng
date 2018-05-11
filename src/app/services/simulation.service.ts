import { Injectable } from '@angular/core';

import { Simulator, SimulatorContext } from '../simulation/simulator';
import { Player, AIPlayer } from '../simulation/player';
import { RuleSet, MyRuleSet } from '../simulation/ruleset';
import { GameCharacter } from '../simulation/character';
import { Character } from '../types/character';
import Team from '../types/team';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private players: Player[];
  private ruleSet: RuleSet;
  private context: SimulatorContext;

  constructor() {
    this.players = [
      new AIPlayer('red'),
      new AIPlayer('blue')
    ];
    this.ruleSet = new MyRuleSet();
  }

  getPlayers() {
    return this.players;
  }

  runSimulation(): Simulator {
    this.context = new SimulatorContext();
    this.ruleSet.setContext(this.context);
    this.context.ruleSet = this.ruleSet;
    this.context.players = this.players;

    const simulator = new Simulator(this.context);
    simulator.init();

    this.players[0].addCharacter(new GameCharacter(100, 4));
    this.players[1].addCharacter(new GameCharacter(100, 5));

    simulator.run();
    return simulator;
  }

  getTeams(): Team[] {
    return this.players.map(p => {
      return Team.create(p.id, p.getCharacters().map(Character.create));
    });
  }
}
