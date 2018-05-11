import { Player } from './player';
import { SimulatorContext } from './simulator';

export class RuleSet {

    private context: SimulatorContext;

    setContext(context: SimulatorContext) {
        this.context = context;
    }

    getPlayers(): Player[] {
        return this.context.players;
    }
}

export class MyRuleSet extends RuleSet {

    getDead(): Player[] {
        return this.getPlayers().filter(p => p.getCharacters().filter(c => !c.isAlive()).length > 0);
    }

    getAlive(): Player[] {
        return this.getPlayers().filter(p => p.getCharacters().filter(c => c.isAlive()).length > 0);
    }

    getWinners(): Player[] {
        if (this.getAlive().length === 1) {
            return this.getAlive();
        }
        return [];
    }
}
