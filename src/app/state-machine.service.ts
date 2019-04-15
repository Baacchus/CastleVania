import { Injectable } from '@angular/core';

export const MOVE_LEFT = 1;
export const MOVE_RIGHT = 2;
export const MOVE_NULL = 0;
export const MOVE_JUMP = 3;

@Injectable({
  providedIn: 'root'
})
export class StateMachineService {
  
  movestate: number;

  constructor() { }

  setMoveState(state: number){
    this.movestate = state;
  }
}