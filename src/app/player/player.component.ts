import { GameloopService } from './../services/gameloop.service';
import { StateMachineService, MOVE_RIGHT, MOVE_LEFT, MOVE_NULL, MOVE_JUMP, ATTACK } from '../services/state-machine.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public soundSwordVoid: any;

  constructor(public stateMachina: StateMachineService, public gameloop: GameloopService) { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    event.preventDefault(); //bloque le scroll
    switch (event.keyCode) {
      case 39:
        this.stateMachina.setMoveState(MOVE_RIGHT);
        break;
      case 37:
        this.stateMachina.setMoveState(MOVE_LEFT);
        break;
      case 32:
        this.stateMachina.setMoveState(MOVE_JUMP);
        break;
      case 13:
        this.stateMachina.setMoveState(ATTACK);
        break;
    }
  }

  @HostListener('document:keyup', ['$event']) onKeyup(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 39:
        this.stateMachina.beforeLasteState = this.stateMachina.lastState;
        this.stateMachina.setMoveState(MOVE_NULL);
        this.stateMachina.lastState = 2;
        break;
      case 37:
        this.stateMachina.beforeLasteState = this.stateMachina.lastState;
        this.stateMachina.setMoveState(MOVE_NULL);
        this.stateMachina.lastState = 1;
        break;
      case 32:
        this.stateMachina.beforeLasteState = this.stateMachina.lastState;
        this.stateMachina.setMoveState(MOVE_NULL);
        this.stateMachina.lastState = 3;
        break;
      case 13:
        this.stateMachina.beforeLasteState = this.stateMachina.lastState;
        this.stateMachina.setMoveState(MOVE_NULL);
        this.stateMachina.lastState = 4;
        this.soundSwordVoid = new Audio();
        this.soundSwordVoid.src = 'assets/sound/sword-void.mp3';
        this.soundSwordVoid.load();
        this.soundSwordVoid.play();
        break;
    }
  }
}