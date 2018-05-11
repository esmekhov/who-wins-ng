import { Component, OnInit, Input } from '@angular/core';
import Team from '../../types/team';
import { Character } from '../../types/character';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.sass'],
})
export class CharacterPanelComponent implements OnInit {

  @Input() private teams: Team[];

  constructor() {
  }

  ngOnInit() {
  }

}
