import { Component, OnInit, HostListener } from '@angular/core';
import { MapService } from '../services/map.service';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map: number[][];
  public assets: {id: number; name: string; url: string}[];

  constructor(public mapService: MapService, public assetService: AssetService) { }

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.assets = this.assetService.getAsset();
  }

  @HostListener('document:keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    switch(event.which){
      case 39:
        console.log(" >>>  droite ");
      break;
      case 37:
        console.log(" <<<  gauche ");
      break;
    }
  }

}
