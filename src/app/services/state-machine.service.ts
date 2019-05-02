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
  charY: number = 8;
  powerJump: number = 0;

  lifePlayer: number = 4;
  public move: any = 0;

  public monsters: Monster[] = [
    new Wolf(6, 8, 1, 1), new Wolf(8, 5, 1, 1), new Wolf(15, 8, 1, 1), new Wolf(25, 8, 1, 1), new Wolf(27, 8, 1, 1),
    new Wolf(29, 8, 1, 1), new Wolf(31, 8, 1, 1), new Wolf(97, 8, 1, 1), new Wolf(115, 8, 1, 1), new Wolf(100, 8, 1, 1), new Wolf(105, 8, 1, 1),
    new Ghost(80, 3.5, 0, 0), new Ghost(75, 7.5, 0, 0), new Ghost(75, 7.5, 1, 2), new Ghost(78, 7.5, 2, 2), new Wolf(25, 8, 1, 1), new Ghost(82, 7.5, 2, 2),
    new Beast(130, 7.3, 0, 0), new Beast(125, 7.3, 0, 0)];

  public startTime: Date;
  public gameDuration: number = 0;
  public endTime: Date;

  constructor() { }

  setMoveState(state: number) {
    this.moveState = state;
  }
}
