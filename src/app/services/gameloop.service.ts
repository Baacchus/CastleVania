import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP} from './state-machine.service';
import { Monster } from '../monster/monster';




// const  LOOP_INTERVAL = 50;


@Injectable({
  providedIn: 'root'
})

export class GameloopService {

  public move: number;
  public canJump: Boolean = true;

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService) { }

  
  logic() {
    this.moveMonster();


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

  moveMonster() {
    for (let index in this._mapService.monsters) {
      const monster = this._mapService.monsters[index]

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
      if((this._stateMachina.charX - monster.monsterX   ) && (this._stateMachina.charY === )){
      this._stateMachina.lifePlayer -= 1;
      console.log(this._stateMachina.lifePlayer)
    }
    }
  }

}