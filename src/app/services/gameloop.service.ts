import { Injectable } from '@angular/core';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT } from './state-machine.service';

const  LOOP_INTERVAL = 50;

@Injectable({
  providedIn: 'root'
})
export class GameloopService {

  constructor(private stateMachina: StateMachineService) { }

  logic(){
    if(this.stateMachina.moveState === MOVE_LEFT){
      this.stateMachina.charX -= 0.1;
    }
    else if(this.stateMachina.moveState === MOVE_RIGHT){
      this.stateMachina.charX += 0.1;
    }
    
    setInterval(this.logic, LOOP_INTERVAL);
  }

  play(){
    this.logic();
  }
}