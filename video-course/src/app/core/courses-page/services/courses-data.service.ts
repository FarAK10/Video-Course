import { Injectable } from '@angular/core';
import { courses } from '../../shared/data/courses';
import { FilterPipe } from '../../shared/pipes/filter-pipe/filter.pipe';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesDataService {
  constructor(private filterPipe: FilterPipe) {}

  private courses: ICourse[] = courses.slice();

  private courses$ = new BehaviorSubject<ICourse[]>(this.courses);

  searchTermSubject = new BehaviorSubject<string>('');

  setSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTermSubject;
  }

  getCourses(searchTerm: string = ''): Observable<ICourse[]> {
    return this.courses$.pipe(
      map((courses: ICourse[]) => {
        return this.filterPipe.transform(courses, searchTerm);
      }),
    );
  }

  getCourseById(id: number): ICourse | null {
    const course = this.courses.find((course: ICourse) => (course.id === id));
    if (!course) return null;
    return course;
  }

  addCourse(courseBody: ICourseBody): void {
    const newCourse: ICourse = {
      id: this.courses.length + 1,
      ...courseBody,
    };
    this.courses.push(newCourse);
  }

  editCourse(updatedCourse:ICourse):void{
    const ind = this.courses.findIndex((course:ICourse)=>course.id===updatedCourse.id)
    this.courses[ind] = updatedCourse
  }

  deleteCourse(id: number): void {
    this.courses.forEach((course: ICourse, ind: number) => {
      if (course.id === id) {
        this.courses.splice(ind, 1);
      }
    });
    this.courses$.next(this.courses);
  }
}
