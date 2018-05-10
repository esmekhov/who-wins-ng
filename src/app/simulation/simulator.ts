import Resolver from './resolver';
import Queue from './game-queue';
import { Character } from './character';
import { AttackEvent } from './game-event';
import { attack } from './process';

export class SimulatorContext {

    public characters: Map<string, Character[]>;
    public timer: 0;

    constructor(public players?, public ruleSet?) {
        this.players = players;
        this.ruleSet = ruleSet;
    }

    init() {
        this.characters = new Map<string, Character[]>();
        this.players.map(p => {
            this.characters.set(p.id, []);
            p.setContext(this);
        });
    }

}

export class Simulator {

    public queue: Queue;
    private resolver: Resolver;
    private stepTime = 100;   // ms
    private timeout = 100000; // ms

    constructor(private context: SimulatorContext) {
        this.context = context;
        this.queue = new Queue();
        this.resolver = new Resolver(this.queue, this);

        this.context.timer = 0; // ms
    }

    get players() {
        return this.context.players;
    }

    get ruleSet() {
        return this.context.ruleSet;
    }

    get timer() {
        return this.context.timer;
    }

    set timer(time) {
        this.context.timer = time;
    }

    init() {
        this.context.init();
    }

    process(event) {
        if (event instanceof AttackEvent) {
            attack(event);
        }
    }

    step() {
        // create events and put them in queue
        this.players.filter(p => p.canAct())
            .map(p => p.act())
            .forEach(e => this.queue.put(e));

        // resolve (process) events
        this.resolver.resolve(this.timer);

        // update timer
        this.timer += this.stepTime;
    }

    run() {
        do {
            this.step();
        } while (this.timer < this.timeout && this.ruleSet.getWinners().length === 0);
        return this.ruleSet.getWinners();
    }
}
