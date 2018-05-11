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
  public simulator: Simulator;
  private winner: Player[];

  constructor() {
    this.players = [
      new AIPlayer('AI 1'),
      new AIPlayer('AI 2')
    ];
    this.ruleSet = new MyRuleSet();
  }

  getPlayers() {
    return this.players;
  }

  init() {
    this.context = new SimulatorContext();
    this.ruleSet.setContext(this.context);
    this.context.ruleSet = this.ruleSet;
    this.context.players = this.players;

    this.simulator = new Simulator(this.context);
    this.simulator.init();

    this.players[0].addCharacter(new GameCharacter(100, 5, 'Hero'));
    this.players[1].addCharacter(new GameCharacter(100, 4, 'Monster'));
  }

  run(): Simulator {
    this.winner = this.simulator.run();
    return this.simulator;
  }

  getTeams(): Team[] {
    return this.players.map(p => {
      return Team.create(p.id, p.getCharacters().map(Character.create));
    });
  }
}
