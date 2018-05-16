import { Component, OnInit } from '@angular/core';
import Team from '../../types/team';
import { SimulationService } from '../../services/simulation.service';

@Component({
  selector: 'app-team-editor-page',
  templateUrl: './team-editor-page.component.html',
  styleUrls: ['./team-editor-page.component.sass']
})
export class TeamEditorPageComponent implements OnInit {

  private team: Team;

  constructor(private simulationService: SimulationService) { }

  ngOnInit() {
    this.simulationService.getTeams().filter(t => t.name === name);
  }

}
