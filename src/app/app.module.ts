import { StateMachineService } from './state-machine.service';
import { MapService } from './map.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
<<<<<<< HEAD
import { PlayerComponent } from './player/player.component';
=======
import { AssetService } from './services/asset.service';
import { MapService } from './services/map.service';
>>>>>>> origin/damien-guyonnet

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MapComponent,
    PlayerComponent
=======
    MapComponent
>>>>>>> origin/damien-guyonnet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MapService,
<<<<<<< HEAD
    StateMachineService
=======
    AssetService
>>>>>>> origin/damien-guyonnet
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
