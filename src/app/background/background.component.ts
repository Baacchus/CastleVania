import { Component, OnInit } from '@angular/core';
import { GameloopService } from '../services/gameloop.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(private gameLoop: GameloopService) { }

  ngOnInit() {
    this.gameLoop.play();
  }

}
