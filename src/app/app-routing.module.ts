import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { InterfaceComponent } from './interface/interface.component';
import { OptionsComponent } from './options/options.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { GameOverComponent } from './game-over/game-over.component';
import { WinComponent } from './win/win.component';

const routes: Routes = [
  
  { path: '', redirectTo: "/background", pathMatch: 'full'},
  { path: 'background',component: BackgroundComponent},
  { path: 'interface', component: InterfaceComponent },
  { path: "options", component: OptionsComponent},
  { path: "map", component: MapComponent},
  { path: "menu", component: MenuComponent},
  { path: "options", component: OptionsComponent},
  /* A suprimmer */
  { path: "gameOver", component: GameOverComponent},
  /* A suprimmer */
  { path: "youWin", component: WinComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
