import Team from '../types/team';

const RENAME_TEAM = 'RENAME_TEAM';
const ADD_CHARACTER = 'ADD_CHARACTER';
const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

const initialState = [
    Team.create('AI 1', []),
    Team.create('AI 2', [])
];

export const Actions = {RENAME_TEAM, ADD_CHARACTER, REMOVE_CHARACTER};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            const {character, name} = action.payload;
            const team = getTeam(name)(state);
            team.characters.push(character);
            return state;
        case REMOVE_CHARACTER:
            break;
        default:
            return state;
    }
};

const last = <T>(arr: Array<T>): T => arr.slice(0).pop();
export const getTeam = (name: string) => (state: Team[]): Team => last(state.filter(t => t.name === name));
