import { AttackEvent } from './game-event';

export class Character {

    constructor(public hp = 100, public damage = 5) {
        this.hp = hp;
        this.damage = damage;
    }

    attack(target, time) {
        return new AttackEvent(this, target, time, this.damage);
    }

    isAlive() {
        return this.hp > 0;
    }

}
