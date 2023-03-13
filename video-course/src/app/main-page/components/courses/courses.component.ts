import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Observable, of, Subscription, switchMap, map } from 'rxjs';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  constructor(
    private coursesDataService: CoursesDataService,
    private filterPipe: FilterPipe,
  ) {}

  courses$: Observable<ICourse[]> = of([]);

  filteredCourses: ICourse[] = [];

  searchTerm: string = '';

  searchTermSub!: Subscription;

  ngOnInit(): void {
    this.searchTermSub = this.coursesDataService
      .getSearchTerm()
      .pipe(
        switchMap((searchTerm: string) => {
          this.searchTerm = searchTerm;
          return this.coursesDataService.getCourses();
        }),
        map((courses: ICourse[]) =>
          this.filterPipe.transform(courses, this.searchTerm),
        ),
      )
      .subscribe((filteredCourses: ICourse[]) => {
        this.filteredCourses = filteredCourses;
      });
  }

  ngOnDestroy(): void {
    this.searchTermSub.unsubscribe();
  }
}
