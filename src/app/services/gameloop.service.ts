import { Injectable } from '@angular/core';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP } from './state-machine.service';

//const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  constructor(private _stateMachina: StateMachineService) {  }

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
    
    requestAnimationFrame( () => this.logic()); //setinterval => request...
  }

  play(){
    this.logic();
  }
}