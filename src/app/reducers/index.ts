import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { SimulationOptions, reducer as simReducer } from './simulation-options';
import { Layout, reducer as layoutReducer } from './layout';

export interface State {
    simulationOptions: SimulationOptions;
    layout: Layout;
}

export const reducers: ActionReducerMap<State> = {
    simulationOptions: simReducer,
    layout: layoutReducer
};

export const getSimulationOptions = (state: State) => state.simulationOptions;
export const getLayout = (state: State) => state.layout;
