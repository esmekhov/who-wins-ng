class RuleSet {

    private context;

    setContext(context) {
        this.context = context;
    }

    getPlayers() {
        return this.context.players;
    }
}

export class MyRuleSet extends RuleSet {

    getDead() {
        return this.getPlayers().filter(p => p.getCharacters().filter(c => !c.isAlive()).length > 0);
    }

    getAlive() {
        return this.getPlayers().filter(p => p.getCharacters().filter(c => c.isAlive()).length > 0);
    }

    getWinners() {
        if (this.getAlive().length === 1) {
            return this.getAlive();
        }
        return [];
    }
}
