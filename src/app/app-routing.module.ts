import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { InterfaceComponent } from './interface/interface.component';

const routes: Routes = [
  
  { path: '', redirectTo: "/background", pathMatch: 'full'},
  { path: 'background',component: BackgroundComponent},
  { path: "interface", component: InterfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
