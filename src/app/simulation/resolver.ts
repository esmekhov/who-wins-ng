import GameEventQueue from './game-queue';

export default class Resolver {

    constructor(public queue: GameEventQueue, public simulation) {
        this.simulation = simulation;
    }

    resolve(time) {
        const events = this.queue.getEvents(time);
        events.map(e => {
            this.simulation.process(e);
        });
        this.queue.resolveEvents(time);
    }
}
