import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP } from './state-machine.service';

//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  public canJump: Boolean = true;

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService) { }

  logic() {

    if (this._stateMachina.moveState === MOVE_LEFT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX - 1)] === 0) {
        this._stateMachina.charX -= 0.1;
      }
    }
    else if (this._stateMachina.moveState === MOVE_RIGHT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX + 1)] === 0) {
        this._stateMachina.charX += 0.1;
        console.log(this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX)])
        this.scrollLock();
      }
    }
    else if (this._stateMachina.moveState === MOVE_JUMP && this.canJump) {
      for (let i = 0; i < 5; i++) {
        this.canJump = false;
        this._stateMachina.charY -= 1;
      }
    }

    if ((this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] === 0)) {
      this._stateMachina.charY += 0.2;
    }

    if ((this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] != 0)) {
      this.canJump = true;
    }

    requestAnimationFrame(() => this.logic()); //setinterval => request...
  }

  play() {
    this.logic();
  }

  /* Scroll Lock */
  public screenWidth: number;

  scrollLock() {
    console.log(this._stateMachina.charX * 50);
    this.screenWidth = window.innerWidth;
    window.scroll((this._stateMachina.charX) * 50 - ((window.innerWidth / 2) - 500), this._stateMachina.charY * 50);
  }

}