import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { SimulationOptions, reducer as simReducer } from './simulation-options';
import { Layout, reducer as layoutReducer } from './layout';
import Team from '../types/team';
import { reducer as teamReducer } from './teams';

export interface State {
    simulationOptions: SimulationOptions;
    layout: Layout;
    teams: Team[];
}

export const reducers: ActionReducerMap<State> = {
    simulationOptions: simReducer,
    layout: layoutReducer,
    teams: teamReducer
};

export const getSimulationOptions = (state: State) => state.simulationOptions;
export const getLayout = (state: State) => state.layout;
export const getTeams = (state: State) => state.teams;
