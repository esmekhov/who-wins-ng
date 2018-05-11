import Team from './team';
import { GameEvent } from '../simulation/game-event';

interface AppState {
    simulationOptions?: any;
    teams?: Team[];
    log?: GameEvent[];
    display?: any;
    winners?: Team[];
}
