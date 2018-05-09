export class CharacterProperty {

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    name: string;
    value: any;
}

export class Character {

    constructor() {
        this.properties = [];
    }

    name: string;
    properties: CharacterProperty[];

    static create(obj: any) {
        const char = new Character();
        for (const propName of Object.keys(obj)) {
            if (propName === 'name') {
                char.name = obj[propName];
            } else {
                char.properties.push(new CharacterProperty(propName, obj[propName]));
            }
        }
        return char;
    }
}
