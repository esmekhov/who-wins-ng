import { SimulatorContext } from './simulator';
import { GameCharacter } from './character';

export class Player {

    protected context: SimulatorContext;
    protected characters: GameCharacter[];

    constructor(public readonly id: string) {
        this.characters = [];
    }

    setContext(context: SimulatorContext) {
        this.context = context;
    }

    addCharacter(character: GameCharacter) {
        this.characters.push(character);
    }

    getCharacters() {
        return this.characters.slice();
    }

}

export class AIPlayer extends Player {

    constructor(id) {
        super(id);
    }

    getHostileCharacters() {
        let result = [];
        if (this.context) {
            this.context.players.forEach((p: Player) => {
                if (p.id !== this.id) {
                    result = result.concat(p.getCharacters());
                }
            });
        }
        return result;
    }

    act() {
        const myCharacters = this.getCharacters();
        const hostileCharacters = this.getHostileCharacters();
        return myCharacters[0].attack(hostileCharacters[0], this.context.timer);
    }

    canAct() {
        return this.getCharacters().filter(c => c && c.isAlive()).length > 0;
    }
}
