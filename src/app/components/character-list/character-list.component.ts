import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  get link() {
    return '/team-editor/' + this.team.name;
  }

}
