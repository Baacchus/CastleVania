import { Injectable } from '@angular/core';

export const MOVE_LEFT = 1;
export const MOVE_RIGHT = 2;
export const MOVE_NULL = 0;
export const MOVE_JUMP = 3;


@Injectable({
  providedIn: 'root'
})
export class StateMachineService {
  
  moveState: number = 0;
  lastState: number = 0;
  charX: number = 0;
  charY: number = 8;
  powerJump: number= 0;
  
  constructor() { }

  setMoveState(state: number){
    this.moveState = state;
  }
}