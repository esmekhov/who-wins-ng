export class GameEvent {

    constructor(public source: any, public target: any, public time: any) {
    }

}

export class AttackEvent extends GameEvent {

    constructor(public source: any, public target: any, public time: any, public damage: any) {
        super(source, target, time);
    }

}

