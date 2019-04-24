import { StateMachineService, MOVE_RIGHT, MOVE_LEFT, MOVE_NULL, MOVE_JUMP } from '../services/state-machine.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {



  constructor(public stateMachina : StateMachineService) { }

  ngOnInit() {
  }

  @HostListener('document:keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    event.preventDefault(); //bloque le scroll 

    switch (event.keyCode) {
      case 39:
        console.log(" >>>  droite ");
        this.stateMachina.setMoveState(MOVE_RIGHT);
        break;
      case 37:
        console.log(" <<<  gauche ");
        this.stateMachina.setMoveState(MOVE_LEFT);
        break;
      case 32: 
        console.log(" ^ jump ^ ");
        this.stateMachina.setMoveState(MOVE_JUMP);
        
        break;
    }
  }

  @HostListener('document:keyup', ['$event']) onKeyup(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 39:
        console.log("STOP");
        this.stateMachina.setMoveState(MOVE_NULL);
        this.stateMachina.lastState = MOVE_RIGHT;
        break;
      case 37:
        console.log("STOP");
        this.stateMachina.setMoveState(MOVE_NULL);
        this.stateMachina.lastState = MOVE_LEFT;
        break;
    }
  }

}