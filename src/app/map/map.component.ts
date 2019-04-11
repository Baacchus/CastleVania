import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
