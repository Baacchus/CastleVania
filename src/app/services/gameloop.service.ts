import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP, Attack } from './state-machine.service';
import { Monster, Wolf } from '../monster/monster';




// const  LOOP_INTERVAL = 50;


@Injectable({
  providedIn: 'root'
})

export class GameloopService {

  public move: number;
  public canJump: Boolean = true;
  public distChara: number = 0;

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService, ) { }


  logic() {
    this.moveMonster();

    // this.distChara = Math.abs(this._stateMachina.charX - this._mapService.)

    if (this._stateMachina.moveState === MOVE_LEFT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX - 1)] === 0) {
        this._stateMachina.charX -= 0.1;
      }
    }
    else if (this._stateMachina.moveState === MOVE_RIGHT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX + 1)] === 0) {
        this._stateMachina.charX += 0.1;
      }
    }
    else if (this._stateMachina.moveState === MOVE_JUMP && this.canJump) {
        this._stateMachina.powerJump= 30;
        this.canJump = false;
       
    }

    if (this._stateMachina.powerJump  <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] === 0) ) {
      this._stateMachina.charY += 0.09;
    }

    if (this._stateMachina.powerJump  <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] != 0)) {
      this.canJump = true;
      this._stateMachina.powerJump= 0;

    }

    if(this._stateMachina.powerJump > 0){
      this._stateMachina.charY -= 0.1;
      this._stateMachina.powerJump -= 1;
    }

    


    requestAnimationFrame(() => this.logic()); //setinterval => request...
  }

  play() {
    this.logic();
  }

  moveMonster() {
    for (let index in this._mapService.monsters) {
      const monster = this._mapService.monsters[index];

      if (monster.direction === MOVE_RIGHT) {
        monster.monsterX += 0.05;
        if (monster.initialX + monster.amplitude < monster.monsterX) {
          monster.direction = MOVE_LEFT;
        }
      }
      else if (monster.direction == MOVE_LEFT) {
        monster.monsterX -= 0.05;
        if (monster.initialX - monster.amplitude > monster.monsterX) {
          monster.direction = MOVE_RIGHT;
        }
      }
    if( Math.abs(this._stateMachina.charX - monster.monsterX) < 0.2 ) {
      console.log(this._stateMachina.lifePlayer)
    }
    if((this._stateMachina.moveState === Attack) && Math.abs(this._stateMachina.charX - monster.monsterX) < 0.6) {
      this._mapService.monsters.splice([0][0])
    }
    }
  }
}