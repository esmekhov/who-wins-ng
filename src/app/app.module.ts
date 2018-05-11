import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CombatLogComponent } from './components/combat-log/combat-log.component';
import { LaunchPanelComponent } from './components/launch-panel/launch-panel.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CharacterCardComponent,
    CombatLogComponent,
    LaunchPanelComponent,
    CharacterListComponent,
    CharacterPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
