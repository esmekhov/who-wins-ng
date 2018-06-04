import Resolver from './resolver';
import Queue from './game-queue';
import { GameCharacter } from './character';
import { AttackEvent, GameEvent } from './game-event';
import { attack } from './process';
import { Player, AIPlayer } from './player';

export class SimulatorContext {

    public characters: Map<string, GameCharacter[]>;
    public timer = 0;

    constructor(public players?, public ruleSet?) {
        this.players = players;
        this.ruleSet = ruleSet;
        this.characters = new Map<string, GameCharacter[]>();
        if (players && players.length > 0) {
            this._initPlayers();
        }
    }

    _initPlayers() {
        this.players.map(p => {
            this.characters.set(p.id, []);
            p.setContext(this);
        });
    }

    init() {
        this._initPlayers();
    }

    addPlayer(player: Player) {
        if (!this.characters.has(player.id)) {
            this.characters.set(player.id, []);
            player.setContext(this);
        }
    }

    removePlayer(player: Player) {
        this.characters.delete(player.id);
        player.setContext(null);
    }

}

export class Simulator {

    public queue: Queue;
    private resolver: Resolver;
    public stepTimeMs = 100;
    public maxTimeMs = 100000;

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

    get timer(): number {
        return this.context.timer;
    }

    set timer(time: number) {
        this.context.timer = time;
    }

    init() {
        this.context.init();
    }

    process(event: GameEvent) {
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
        this.timer += this.stepTimeMs;
    }

    run(): Player[] {
        while (this.timer < this.maxTimeMs && this.ruleSet.getWinners().length === 0) {
            this.step();
        }
        return this.ruleSet.getWinners();
    }
}
