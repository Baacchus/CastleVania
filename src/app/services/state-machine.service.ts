import { Injectable } from '@angular/core';
import { Wolf, Ghost, Monster, Beast } from '../monster/monster';


export const MOVE_LEFT = 1;
export const MOVE_RIGHT = 2;
export const MOVE_NULL = 0;
export const MOVE_JUMP = 3;
export const ATTACK = 4;

@Injectable({
  providedIn: 'root'
})
export class StateMachineService {

  moveState: number = 0;
  lastState: number = 0;
  beforeLasteState: number = 2;
  charX: number = 1;
  charY: number = 8.15;
  powerJump: number = 0;

  lifePlayer: number = 4;
  public move: any = 0;
  public monsters: Monster[] = [new Wolf(4, 8, 3, 1), new Wolf(8,5,2,2), new Ghost(15,3,0,0),  new Beast(4,5,0,0)]
  public startTime: Date;
  public gameDuration: number = 0;
  public endTime: Date;

  constructor() {  }

  setMoveState(state: number) {
    this.moveState = state;
  }
}
