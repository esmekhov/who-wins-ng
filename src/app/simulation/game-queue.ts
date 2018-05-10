import { GameEvent } from './game-event';

type TimeMap = Map<string, GameEvent[]>;

export default class GameEventQueue {

    // normally, you would do a tree, because why wouldn't you
    // but here, I'll be lazy and do a map

    planned: TimeMap;
    resolved: TimeMap;

    constructor() {
        this.planned = new Map<string, GameEvent[]>();
        this.resolved = new Map<string, GameEvent[]>();
    }

    _put(tm: TimeMap, event: GameEvent) {
        const events = tm.get(event.time) || [];
        tm.set(event.time, events.concat(event));
    }

    put(event: GameEvent) {
        this._put(this.planned, event);
    }

    cancel(event: GameEvent) {
        this._remove(this.planned, event);
    }

    remove(event: GameEvent) {
        this._remove(this.resolved, event);
    }

    _remove(tm: TimeMap, event: GameEvent) {
        const t = event.time;
        if (tm.has(t)) {
            const events = tm.get(t);
            const ind = events.indexOf(event);
            events.splice(ind, 1);
            tm.set(t, events);
        }
    }

    _hasEvent(obj, event: GameEvent): boolean {
        const t = event.time;
        if (obj.hasOwnProperty(t)) {
            const events = obj[t];
            return events.includes(event);
        }
        return false;
    }

    resolve(event: GameEvent) {
        if (this._hasEvent(this.planned, event)) {
            this._remove(this.planned, event);
            this._put(this.resolved, event);
        }
    }

    getEvents(time?): GameEvent[] {
        if (this.planned.hasOwnProperty(time)) {
            return this.planned[time].slice();
        }
        return [];
    }

    resolveEvents(time) {
        this.getEvents().forEach(e => this.resolve(e));
    }

    getResolvedEvents(): TimeMap {
        // should be a copy, cba
        return this.resolved;
    }
}
