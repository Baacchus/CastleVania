import { GameloopService } from '../services/gameloop.service';
import { Component, OnInit, ViewChild, TemplateRef, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { MapService } from '../services/map.service';
import { AssetService } from '../services/asset.service';
import { StateMachineService } from '../services/state-machine.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map: number[][];
  public assets: { name: string; url: string }[];
  //public test: any;

  constructor(public mapService: MapService, public assetService: AssetService, public gameLoop: GameloopService, private stateMachine: StateMachineService) { }

  ngOnInit() {
    this.map = this.mapService.getMap();
    this.assets = this.assetService.getAsset();
    this.gameLoop.play();
    //window.setInterval(this.scrollBlock, 50);
  }

  /* scrollBlock() {
    this.test = document.getElementById('screen');
    this.test.scroll(this.stateMachine.charX * 50, this.stateMachine.charY);
  } */

}

