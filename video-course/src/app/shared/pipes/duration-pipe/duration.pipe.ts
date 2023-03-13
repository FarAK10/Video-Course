import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minNumber: number): string {
    const hoursNumber = Math.floor(minNumber / 60);
    const minLeft = minNumber % 60;
    if (hoursNumber === 0) {
      return `${minLeft}min`;
    } else if (minLeft == 0) {
      return `${hoursNumber}h`;
    } else {
      return `${hoursNumber}h ${minLeft}min`;
    }
  }
}
