import { Component } from '@angular/core';
import { courses } from 'src/app/shared/data/courses';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses: ICourse[] = courses;
}
