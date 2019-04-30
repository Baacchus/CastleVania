import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { InterfaceComponent } from './interface/interface.component';
import { OptionsComponent } from './options/options.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  
  { path: '', redirectTo: "/background", pathMatch: 'full'},
  { path: 'background',component: BackgroundComponent},
  { path: "interface", component: InterfaceComponent },
  { path: "options", component: OptionsComponent},
  { path: "menu", component: MenuComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
