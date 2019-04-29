import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { Wolf } from '../monster/monster';


export const MOVE_LEFT = 1;
export const MOVE_RIGHT = 2;
export const MOVE_NULL = 0;
export const MOVE_JUMP = 3;
export const Attack = 4;



@Injectable({
  providedIn: 'root'
})
export class StateMachineService {

  moveState: number = 0;
  lastState: number = 0;
  charX: number = 0;
  charY: number = 8;
  powerJump: number= 0;
  lifePlayer: number = 4;
  public move: any = 0;
  public monsters: Wolf[] = [new Wolf(4, 8)]


  constructor(mapService: MapService) {  }

  setMoveState(state: number) {
    this.moveState = state;
  }
}