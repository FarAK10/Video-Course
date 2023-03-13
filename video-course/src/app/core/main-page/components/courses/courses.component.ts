import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Observable, of, Subscription, switchMap, map } from 'rxjs';
import { FilterPipe } from 'src/app/core/shared/pipes/filter-pipe/filter.pipe';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  constructor(private coursesDataService: CoursesDataService) {}

  courses$: Observable<ICourse[]> = of([]);

  filteredCourses: ICourse[] = [];

  searchTermSub!: Subscription;

  ngOnInit(): void {
    this.searchTermSub = this.coursesDataService
      .getSearchTerm()
      .pipe(
        switchMap((searchTerm: string) => {
          return this.coursesDataService.getCourses(searchTerm);
        }),
      )
      .subscribe((filteredCourses: ICourse[]) => {
        this.filteredCourses = filteredCourses;
      });
  }

  ngOnDestroy(): void {
    this.searchTermSub.unsubscribe();
  }
}
