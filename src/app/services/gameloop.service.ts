import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { StateMachineService, MOVE_LEFT, MOVE_RIGHT, MOVE_JUMP, ATTACK } from './state-machine.service';
import { Monster, Wolf } from '../monster/monster';
@Injectable({
  providedIn: 'root'
})

export class GameloopService {

  public move: number;
  public canJump: Boolean = true;
  public distChara: number = 0;
  public musicTheme: any;
  public soundJump: any;
  public soundLand: any;
  public soundSwordVoid: any;

  constructor(private _stateMachina: StateMachineService, private _mapService: MapService, ) { }

  /*   playSoundGame() {
      this.musicTheme = new Audio();
      this.musicTheme.src = "/assets/sound/uefa-champions-league.mp3";
      this.musicTheme.load();
      this.musicTheme.play();
    } */

  logic() {

    //this.playSoundGame();
    this.moveMonster();

    // this.distChara = Math.abs(this._stateMachina.charX - this._mapService.)

    if (this._stateMachina.moveState === MOVE_LEFT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX - 1)] === 0) {
        this._stateMachina.charX -= 0.1;
        this.scrollBlock();
      }
    }
    else if (this._stateMachina.moveState === MOVE_RIGHT) {
      if (this._mapService.map[Math.trunc(this._stateMachina.charY)][Math.round(this._stateMachina.charX + 1)] === 0) {
        this._stateMachina.charX += 0.1;
        this.scrollBlock();
      }
    }
    else if (this._stateMachina.moveState === MOVE_JUMP && this.canJump) {
      this._stateMachina.powerJump = 30;
      this.canJump = false;
      this.soundLand = new Audio()
      this.soundLand.src = "assets/sound/hero-land.mp3"
      this.soundLand.load()
      this.soundLand.play()
      this.scrollBlock();
    }

    if (this._stateMachina.powerJump <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] === 0)) {
      this._stateMachina.charY += 0.1;
      this.scrollBlock();
    }

    if (this._stateMachina.powerJump <= 0 && (this._mapService.map[Math.trunc(this._stateMachina.charY + 1)][Math.round(this._stateMachina.charX)] != 0)) {
      this.canJump = true;
      this._stateMachina.powerJump = 0;
    }

    if (this._stateMachina.powerJump > 0) {

      this._stateMachina.charY -= 0.12;
      this._stateMachina.powerJump -= 1.2;
      if (this._stateMachina.powerJump === 1) {

        this.scrollBlock();
      }
    }


    requestAnimationFrame(() => this.logic()); //setinterval => request...
  }

  play() {
    this.logic();
  }

  moveMonster() {
    for (let index in this._mapService.monsters) {
      const monster = this._mapService.monsters[index];


      if (monster.direction === MOVE_RIGHT) {
        monster.monsterX += 0.05;
        if (monster.initialX + monster.amplitude < monster.monsterX) {
          monster.direction = MOVE_LEFT;
        }
      }
      else if (monster.direction == MOVE_LEFT) {
        monster.monsterX -= 0.05;
        if (monster.initialX - monster.amplitude > monster.monsterX) {
          monster.direction = MOVE_RIGHT;
        }
      }
      if (Math.abs(this._stateMachina.charX - monster.monsterX) < 0.2) {
        Math.round(this._stateMachina.lifePlayer -= 0.0625);
        console.log("Ma vie :" + this._stateMachina.lifePlayer)
      }
      if (((this._stateMachina.moveState === ATTACK) && Math.abs(this._stateMachina.charX - monster.monsterX) < 0.6) && Math.abs(this._stateMachina.charY - monster.monsterY) < 0.6) {
        this._mapService.monsters.splice(parseInt(index), 1)
        this.soundLand = new Audio()
        this.soundLand.src = "assets/sound/sword-monster.mp3"
        this.soundLand.load()
        this.soundLand.play()
      }
    }
  }

  scrollBlock() {
    window.scroll((this._stateMachina.charX * 50) - (window.innerWidth / 2) - 50, this._stateMachina.charY * 50)
  }
}
