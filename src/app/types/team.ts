import { Character } from './character';

export default class Team {
    name: string;
    characters: Character[];

    static create(name: string, characters: Character[]): Team {
        const team = new Team();
        team.name = name;
        team.characters = characters;
        return team;
    }

}
