import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lifePlayer'
})
export class LifePlayerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     return `${value / 8}`;
  }

}
