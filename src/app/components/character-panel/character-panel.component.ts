import { Component, OnInit, HostBinding } from '@angular/core';
import Team from '../../types/team';
import { Character } from '../../types/character';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.sass'],
})
export class CharacterPanelComponent implements OnInit {

  private teams: Team[];

  constructor() {
    const team1 = new Team();
    team1.name = 'hi';
    const team2 = new Team();
    team2.name = 'hello';

    team1.characters = [
      Character.create({
        name: 'One',
        hp: 100
      }),
      Character.create({
        name: 'Two',
        hp: 100
      })
    ];

    team2.characters = [
      Character.create({
        name: 'Three',
        hp: 101
      }),
      Character.create({
        name: 'Four',
        hp: 102
      })
    ];

    this.teams = [team1, team2];
  }

  ngOnInit() {
  }

}
