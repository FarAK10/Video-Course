import { Component } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCourseItemFormSubmitted } from 'src/app/core/state/courses';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  course: ICourseBody = {
    date: new Date().toString(),
    description: '',
    duration: 0,
    title: '',
    isTopRated: false,
    isDeleted: false,
  };

  courseForm!: FormGroup;

  constructor(
    private coursesDataService: CoursesDataService,
    private router: Router,
    private store: Store,
  ) {}

  addCourse(): void {
    const course: ICourseBody = this.courseForm.value;
    this.store.dispatch(
      addCourseItemFormSubmitted({
        courseBody: { ...course, isDeleted: false },
      }),
    );
    this.router.navigate(['../']);
  }

  setCourseForm(form: FormGroup): void {
    this.courseForm = form;
  }
}
