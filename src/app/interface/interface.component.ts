import { Component, OnInit } from '@angular/core';
import { StateMachineService } from '../services/state-machine.service';

@Component({
 selector: 'app-interface',
 templateUrl: './interface.component.html',
 styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

 time: number = 1;

 constructor(public stateMachina: StateMachineService) { }

 ngOnInit() {

   setInterval(() => { if (this.time > 0) this.time++; }, 1000);
   this.stateMachina.lifePlayer = this.stateMachina.lifePlayer;

 }
 

 



}