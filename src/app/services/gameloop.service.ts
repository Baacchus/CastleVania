import { Injectable } from '@angular/core';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP } from './state-machine.service';
import { MapService } from './map.service';



//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {
  public move: number;

  constructor(private _stateMachina: StateMachineService, private MapService: MapService) {  }

  logic(){
    if(this._stateMachina.moveState === MOVE_LEFT){
      this._stateMachina.charX -= 0.05;
    }
    else if(this._stateMachina.moveState === MOVE_RIGHT){
      this._stateMachina.charX += 0.05;
    }
    else if (this._stateMachina.moveState === MOVE_JUMP){
      this._stateMachina.charY -= 0.1;

    }
    
    this.moveMonster();

    requestAnimationFrame( () => this.logic()); //setinterval => request...
  }

  play(){
    this.logic();
  }

  moveMonster() {
    for (let index in this.MapService.monsters) {
      const monster = this.MapService.monsters[index]
 
      if (monster.direction == MOVE_RIGHT) {
        monster.charX += 0.1;
        if (monster.charX + monster.amplitude < monster.charX) {
          monster.direction = MOVE_RIGHT
        }
      }
      else if (monster.direction == MOVE_LEFT) {
        monster.charX -= 0.1;
        if (monster.charX - monster.amplitude > monster.charX) {
          monster.direction = MOVE_RIGHT
        }
      }
    }

  }



}