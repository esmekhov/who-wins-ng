import { Simulator, SimulatorContext } from './simulator';
import { AIPlayer } from './player';
import { MyRuleSet } from './ruleset';
import { Character } from './character';

export default class App {
    run(): Simulator {
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

