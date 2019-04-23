import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @HostListener('document:keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    switch(event.which){
      case 39:
        console.log(" >>>  droite ");
      break;
      case 37:
        console.log(" <<<  gauche ");
      break;
    }
  }
}