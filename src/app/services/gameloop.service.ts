import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP, } from './state-machine.service';




//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  public move: number;
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

    this._stateMachina.gameDuration = new Date().getTime() - this._stateMachina.startTime.getTime() 
  

    requestAnimationFrame(() => this.logic()); //setinterval => request...
  }

  play() {
    this._stateMachina.startTime = new Date()
    this.logic();
   
  }


 

   /*  moveMonster() {
      for (let index in this._mapService.monsters) {
        const monster = this._mapService.monsters[index]

        if (monster.direction == MOVE_RIGHT) {
          monster.charX += 0.1;
          if (monster.charX + monster.amplitude < monster.charX) {
            monster.direction = MOVE_RIGHT;
          }
        }
        else if (monster.direction == MOVE_LEFT) {
          monster.charX -= 0.1;
          if (monster.charX - monster.amplitude > monster.charX) {
            monster.direction = MOVE_RIGHT;
          }
        }
      }


    } */
  }



