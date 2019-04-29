import { GameloopService } from '../services/gameloop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from '../services/map.service';
import { AssetService } from '../services/asset.service';
import { StateMachineService } from '../services/state-machine.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public mapService: MapService, public assetService: AssetService, public gameLoop: GameloopService, public _stateMachina: StateMachineService) { }

  public map: number[][];
  public assets: { name: string; url: string }[];

  @ViewChild('screen') test1;

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.assets = this.assetService.getAsset();
    this.gameLoop.play();
    this.scrollLock();
    //console.log(this.test1.nativeElement);
  }

  scrollLock() {
    //console.log(this._stateMachina.charX);
    //console.log(this._stateMachina.charY * 50);
    let target = this.test1.nativeElement;
    console.log(target);
    target.scroll((this._stateMachina.charX * 10) - 350, this._stateMachina.charY * 10);
  }

}
