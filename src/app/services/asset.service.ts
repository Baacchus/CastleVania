import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  public assets = [
    { name: 'void', url: 'url("../../assets/void.png")' },
    { name: 'floor', url: 'url("../../assets/floor.jpg")' },
    { name: 'ceil', url: 'url("../../assets/ceil.jpg")' },
    { name: 'wall', url: 'url("../../assets/wall.jpg")' },
  ];

  constructor() { }

  getAsset() {
    return this.assets;
  }

}