import { StateMachineService } from './services/state-machine.service';
import { PlayerComponent } from './player/player.component';
import { MapService } from './services/map.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenuComponent } from '../app/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AssetService } from './services/asset.service';

import { GameloopService } from './services/gameloop.service';
import { CoordinatesPipe } from './coordinates.pipe';
import { BackgroundComponent } from './background/background.component';
import { InterfaceComponent } from './interface/interface.component';
import { OptionsComponent } from './options/options.component';
import { GameOverComponent } from './game-over/game-over.component';
import { WinComponent } from './win/win.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlayerComponent,
    CoordinatesPipe,
    InterfaceComponent,
    MenuComponent,
    BackgroundComponent,
    OptionsComponent,
    BackgroundComponent,
    GameOverComponent,
    WinComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MapService,
    AssetService,
    GameloopService,
    StateMachineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }