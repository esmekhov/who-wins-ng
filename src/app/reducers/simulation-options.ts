const SET_STEP_TIME_MS = 'SET_STEP_TIME_MS';
const SET_MAXIMUM_TIME_MS = 'SET_MAXIMUM_TIME_MS';
const RESET = 'RESET';

export interface SimulationOptions {
    maximumTimeMs: number;
    stepTimeMs: number;
}

const initialState: SimulationOptions = {
    maximumTimeMs: 10000,
    stepTimeMs: 100
};

export const Actions = {SET_MAXIMUM_TIME_MS, SET_STEP_TIME_MS, RESET};

const merge = (state: SimulationOptions) => (obj) => Object.assign({}, state, obj);
export const reducer = (state = initialState, action) => {
    const apply = merge(state);
    switch (action.type) {
        case SET_MAXIMUM_TIME_MS:
            return apply({maximumTimeMs: action.payload.maximumTimeMs});
        case SET_STEP_TIME_MS:
            return apply({stepTimeMs: action.payload.stepTimeMs});
        case RESET:
            return apply(initialState);
        default:
            return state;
    }
};

export const getMaximumTimeMs = (state: SimulationOptions) => state.maximumTimeMs;
export const getStepTimeMs = (state: SimulationOptions) => state.stepTimeMs;
