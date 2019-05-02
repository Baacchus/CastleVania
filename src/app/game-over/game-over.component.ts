import { Component, OnInit } from '@angular/core';
import { GameloopService } from '../services/gameloop.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private gameLoop: GameloopService) { }

  ngOnInit() {
    this.gameLoop.resetGame();
  }

}
