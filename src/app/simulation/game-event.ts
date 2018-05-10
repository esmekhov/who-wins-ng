export class GameEvent {

    constructor(public source: any, public target: any, public time: any) {
    }

}

export class AttackEvent extends GameEvent {

    constructor(source: any, target: any, time: any, public damage: any) {
        super(source, target, time);
    }

}

