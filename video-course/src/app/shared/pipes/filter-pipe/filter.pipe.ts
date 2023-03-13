import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(courses: ICourse[], searchText: string): ICourse[] {
    const regex = new RegExp(searchText, 'i');
    return courses.filter((course) => {
      return regex.test(course.title);
    });
  }
}
