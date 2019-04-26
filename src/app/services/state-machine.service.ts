import { Injectable } from '@angular/core';
import { MapService } from './map.service';


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
  public move: any = 0;


  constructor() {mapService: MapService}

  setMoveState(state: number){
    this.moveState = state;
  }
}