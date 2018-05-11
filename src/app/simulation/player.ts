import { SimulatorContext } from './simulator';
import { GameCharacter } from './character';

export class Player {

    protected context: SimulatorContext;

    constructor(public readonly id: string) {}

    setContext(context: SimulatorContext) {
        this.context = context;
    }

    addCharacter(character: GameCharacter) {
        const chars = this.context.characters.get(this.id);
        chars.push(character);
    }

    getCharacters(id?: string) {
        const key = id || this.id;
        return this.context.characters.get(key);
    }

    getOtherCharacters() {
        let result = [];
        this.context.characters.forEach((chars: GameCharacter[], playerId: string) => {
            if (playerId !== this.id) {
                result = result.concat(chars);
            }
        });
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
