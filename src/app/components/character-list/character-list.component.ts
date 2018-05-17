import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Team from '../../types/team';
import { Character, CharacterProperty } from '../../types/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {

  @Input() editMode = false;
  @Input() team: Team;

  @Output() addCharacter = new EventEmitter<Character>();

  constructor() { }

  ngOnInit() {
  }

  get link() {
    return '/team-editor/' + this.team.name;
  }

  onAddCharacter() {
    const char = new Character();
    char.name = 'Default';
    char.properties = [
      new CharacterProperty('hp', 100),
      new CharacterProperty('damage', 2)
    ];
    this.addCharacter.emit(char);
  }
}
