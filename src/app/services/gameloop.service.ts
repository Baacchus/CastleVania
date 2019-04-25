import { Injectable } from '@angular/core';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT } from './state-machine.service';
import { MapService } from './map.service';

//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService) {  }

  logic(){
    // if(this._stateMachina.moveState === MOVE_LEFT && (this._mapService.map[this._stateMachina.charY][this._stateMachina.charX -1]) === VOID){
    //     this._stateMachina.charX -= 0.05;

    // }
    // else if(this._stateMachina.moveState === MOVE_RIGHT){
    //     this._stateMachina.charX += 0.05;
    //     console.log(Math.round(this._stateMachina.charX))
    // }

    if (this._stateMachina.moveState === MOVE_LEFT) {
      if (this._mapService.map[this._stateMachina.charY][Math.trunc(this._stateMachina.charX -1)] === 0) {
        this._stateMachina.charX -= 0.1;
      } 
    }
    else if (this._stateMachina.moveState === MOVE_RIGHT) {
      if (this._mapService.map[this._stateMachina.charY][Math.trunc(this._stateMachina.charX +1)] === 0) {
        this._stateMachina.charX += 0.1;

      }
    }

    requestAnimationFrame( () => this.logic()); //setinterval => request...
  }

  play(){
    this.logic();
  }
}