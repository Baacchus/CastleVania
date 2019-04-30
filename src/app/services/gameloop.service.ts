import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP } from './state-machine.service';

//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  public canJump: Boolean = true;
  public screen;
  public map;

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService, private stateMachine: StateMachineService) { }

  logic() {

    if (this._stateMachina.moveState === MOVE_LEFT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX - 1)] === 0) {
        this._stateMachina.charX -= 0.1;
        this.scrollBlock();
      }
    }
    else if (this._stateMachina.moveState === MOVE_RIGHT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX + 1)] === 0) {
        this._stateMachina.charX += 0.1;
        this.scrollBlock();
      }
    }
    else if (this._stateMachina.moveState === MOVE_JUMP && this.canJump) {
      this._stateMachina.powerJump = 30;
      this.canJump = false;
      //this.scrollBlock();

    }


    if (this._stateMachina.powerJump <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] === 0)) {
      this._stateMachina.charY += 0.09;
      this.scrollBlock();

    }

    if (this._stateMachina.powerJump <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] != 0)) {
      this.canJump = true;
      this._stateMachina.powerJump = 0;
      //this.scrollBlock();


    }

    if (this._stateMachina.powerJump > 0) {
      this._stateMachina.charY -= 0.1;
      this._stateMachina.powerJump -= 1;
      this.scrollBlock();

    }

    requestAnimationFrame(() => this.logic()); //setinterval => request...
  }

  play() {
    this.logic();
  }
  
/* Le player n'est pas au bon endroit */
  scrollBlock() {
    this.screen = document.getElementById('screen');
    this.map = document.getElementById('map');
    //this.map.style.backgroundPosition = (this._stateMachina.charX)
    this.screen.scrollLeft = ((this._stateMachina.charX*50)*10);
    console.log('1/scroll :' + this.screen.scrollLeft);
    console.log('2/charX :' + this._stateMachina.charX * 50);
  }

}