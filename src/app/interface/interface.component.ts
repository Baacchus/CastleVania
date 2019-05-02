import { Component, OnInit } from '@angular/core';
import { StateMachineService, } from '../services/state-machine.service';
import { GameloopService } from '../services/gameloop.service';

@Component({
 selector: 'app-interface',
 templateUrl: './interface.component.html',
 styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

constructor(private stateMachine: StateMachineService, private loop: GameloopService) { }


 ngOnInit() {

 
    }
}
 