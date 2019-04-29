import { Injectable } from '@angular/core';
import { Wolf } from '../monster/monster';


export const MOVE_LEFT = 1;
export const MOVE_RIGHT = 2;
export const MOVE_NULL = 0;
export const MOVE_JUMP = 3;


@Injectable({
  providedIn: 'root'
})
export class StateMachineService {

  moveState: number = 0;
  lastState: number = 2;
  beforeLasteState: number = 2; 
  charX: number = 0;
  charY: number = 8;
  lifePlayer: number = 4;
  public move: any = 0;
  public monsters: Wolf[] = [new Wolf(4, 8)]


  constructor() {  }

  setMoveState(state: number) {
    this.moveState = state;
  }
}