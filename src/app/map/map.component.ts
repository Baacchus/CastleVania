import { GameloopService } from './../services/gameloop.service';
import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map: number[][];
  public assets: {name: string; url: string}[];

  constructor(public mapService: MapService, public assetService: AssetService, public gameLoop: GameloopService) { }

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.assets = this.assetService.getAsset();
    this.gameLoop.play()
  }
}