import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: ICourse[]): ICourse[] {
    return courses
      .sort((a, b) => {
        const firstDate = new Date(a.date);
        const secondDate = new Date(b.date);
        return firstDate > secondDate ? 1 : -1;
      })
      .reverse();
  }
}
