import { SimulatorContext } from './simulator';
import { Character } from './character';

export class Player {

    protected context: SimulatorContext;

    constructor(private readonly id: string) {}

    setContext(context: SimulatorContext) {
        this.context = context;
    }

    addCharacter(character: Character) {
        const chars = this.context.characters.get(this.id);
        chars.push(character);
    }

    getCharacters(id?: any) {
        const key = id || this.id;
        return this.context.characters.get(key);
    }

    getOtherCharacters() {
        let result = [];
        for (const playerId in this.context.characters) {
            if (playerId !== this.id) {
                result = result.concat(this.context.characters[playerId]);
            }
        }
        return result;
    }

}

export class AIPlayer extends Player {

    constructor(id) {
        super(id);
    }

    act() {
        const myCharacters = this.getCharacters();
        const hostileCharacters = this.getOtherCharacters();
        return myCharacters[0].attack(hostileCharacters[0], this.context.timer);
    }

    canAct() {
        return this.getCharacters().filter(c => c && c.isAlive()).length > 0;
    }
}
