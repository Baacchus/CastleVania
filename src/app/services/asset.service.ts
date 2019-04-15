import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  public assets = [
    { id: 0, name: 'void', url: 'url("../../assets/void.png")' },
    { id: 1, name: 'floor', url: 'url("../../assets/floor.jpg")' },
    { id: 2, name: 'ceil', url: 'url("../../assets/ceil.jpg")' },
    { id: 3, name: 'wall', url: 'url("../../assets/wall.jpg")' },
  ];

  constructor() { }

  getAsset() {
    return this.assets;
  }

}