import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { courses } from 'src/app/shared/data/courses';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  constructor() {}

  private courses: ICourse[] = courses.slice();

  private courses$ = new BehaviorSubject<ICourse[]>(this.courses);

  searchTermSubject = new BehaviorSubject<string>('');

  setSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTermSubject;
  }

  getCourses(): Observable<ICourse[]> {
    return this.courses$;
  }
}
