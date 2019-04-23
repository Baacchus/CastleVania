import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordinates'
})
export class CoordinatesPipe implements PipeTransform {

  transform(value: any): any {
    return value * 50;
  }
}
