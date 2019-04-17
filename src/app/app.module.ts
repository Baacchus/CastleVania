import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterfaceComponent } from './interface/interface.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AssetService } from './services/asset.service';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [
    MapService,
    AssetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
