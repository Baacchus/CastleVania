import { Injectable, ViewChild, AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP } from './state-machine.service';
import { MapComponent } from '../map/map.component';

//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService implements OnInit, AfterViewInit {

  @ViewChild(MapComponent) test1: MapComponent;

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService) { }

  public canJump: Boolean = true;

  ngOnInit() {

  }

  logic() {

    if (this._stateMachina.moveState === MOVE_LEFT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX - 1)] === 0) {
        this._stateMachina.charX -= 0.1;
        //this.scrollLock();
        this.test1.scrollLock();
      }
    }
    else if (this._stateMachina.moveState === MOVE_RIGHT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX + 1)] === 0) {
        this._stateMachina.charX += 0.1;
        //this.scrollLock();
        /* console.log(this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX)]); */
      }
    }
    else if (this._stateMachina.moveState === MOVE_JUMP && this.canJump) {
      this._stateMachina.powerJump = 30;
      this.canJump = false;
      //this.scrollLock();
    }


    if (this._stateMachina.powerJump <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] === 0)) {
      this._stateMachina.charY += 0.09;
      //this.scrollLock();
    }

    if (this._stateMachina.powerJump <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] != 0)) {
      this.canJump = true;
      this._stateMachina.powerJump = 0;
      //this.scrollLock();
    }

    if (this._stateMachina.powerJump > 0) {
      this._stateMachina.charY -= 0.1;
      this._stateMachina.powerJump -= 1;
      //this.scrollLock();
    }

    requestAnimationFrame(() => this.logic()); //setinterval => request...
  }

  play() {
    this.logic();
    //this.scrollLock();
    console.log(this.test1);
  }

  /* scrollLock() {
    //console.log(this._stateMachina.charX);
    //console.log(this._stateMachina.charY * 50);
    //let target = this.viewRef;
    //console.log(target);
    //target.scroll(this._stateMachina.charX * 10, this._stateMachina.charY * 10);
  } */

  ngAfterViewInit() {

  }
}