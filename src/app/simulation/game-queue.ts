import { GameEvent } from './game-event';

type TimeMap = Map<number, GameEvent[]>;

export default class GameEventQueue {

    // normally, you would do a tree, because why wouldn't you
    // but here, I'll be lazy and do a map

    planned: TimeMap;
    resolved: TimeMap;

    constructor() {
        this.planned = new Map<number, GameEvent[]>();
        this.resolved = new Map<number, GameEvent[]>();
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
            if (events.length === 0) {
                tm.delete(t);
            } else {
                tm.set(t, events);
            }
        }
    }

    _hasEvent(tm: TimeMap, event: GameEvent): boolean {
        const t = event.time;
        if (tm.has(t)) {
            const events = tm.get(t);
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

    getEvents(time: number): GameEvent[] {
        if (this.planned.has(time)) {
            return this.planned.get(time).slice();
        }
        return [];
    }

    resolveEvents(time: number) {
        this.getEvents(time).forEach(e => this.resolve(e));
    }

    getResolvedEvents(): TimeMap {
        // should be a copy, cba
        return this.resolved;
    }
}
