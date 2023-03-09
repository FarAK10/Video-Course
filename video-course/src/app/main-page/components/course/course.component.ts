import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  @Input() course: ICourse = {
    id: 1,
    date: '',
    description: '',
    duration: 10,
    title: '',
  };
}
