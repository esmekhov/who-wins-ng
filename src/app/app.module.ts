import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SimulationContainerComponent } from './components/simulation-container/simulation-container.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CombatLogComponent } from './components/combat-log/combat-log.component';
import { LaunchPanelComponent } from './components/launch-panel/launch-panel.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { SimulationPageComponent } from './pages/simulation-page/simulation-page.component';
import { TeamEditorPageComponent } from './pages/team-editor-page/team-editor-page.component';

const routes: Routes = [
  { path: 'simulation', component: SimulationPageComponent },
  { path: 'team-editor', component: TeamEditorPageComponent },
  { path: '',   redirectTo: '/simulation', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimulationContainerComponent,
    CharacterCardComponent,
    CombatLogComponent,
    LaunchPanelComponent,
    CharacterListComponent,
    CharacterPanelComponent,
    SimulationPageComponent,
    TeamEditorPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
