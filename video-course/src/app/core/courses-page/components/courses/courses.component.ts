import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Observable, of, Subscription, switchMap, map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectCourseItem,
  selectCourses,
  selectCoursesItems,
  selectSearchInputValue,
} from 'src/app/core/state/courses/courses.selector';
import { courses } from 'src/app/core/shared/data/courses';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  constructor(
    private coursesDataService: CoursesDataService,
    private store: Store,
  ) {}

  filteredCourses: ICourse[] = [];

  searchTermSub!: Subscription;

  searchTerm: string = '';

  ngOnInit(): void {
    this.searchTermSub = this.store
      .select(selectSearchInputValue)
      .pipe(
        tap((searchTerm: string) => {
          this.searchTerm = searchTerm;
        }),
        switchMap(() => this.store.select(selectCoursesItems)),
        map((courses) =>
          this.coursesDataService.filterCourses(courses, this.searchTerm),
        ),
      )
      .subscribe((courses) => {
        this.filteredCourses = courses;
      });
  }

  ngOnDestroy(): void {
    this.searchTermSub.unsubscribe();
  }
}
