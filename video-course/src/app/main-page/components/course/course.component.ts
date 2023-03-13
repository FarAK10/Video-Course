import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnChanges {
  @Input() course: ICourse = {
    id: 1,
    date: '',
    description: '',
    duration: 10,
    title: '',
  };

  date: Date = new Date();

  ngOnChanges(changes: SimpleChanges): void {
    this.date = new Date(this.course.date);
  }
}
