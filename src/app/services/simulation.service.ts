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

  private players: Player[] = [];
  private ruleSet: RuleSet;
  private context: SimulatorContext;
  public simulator: Simulator;
  private winner: Player[];

  constructor() {
    this.ruleSet = new MyRuleSet();
  }

  getPlayers() {
    return this.players;
  }

  setMaxTimeMs(maxTimeMs: number) {
    this.simulator.maxTimeMs = maxTimeMs;
  }

  setStepTimeMs(stepTimeMs: number) {
    this.simulator.stepTimeMs = stepTimeMs;
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

  setTeams(teams: Team[]) {
    this.players = teams.map(t => new AIPlayer(t.name));
  }
}
