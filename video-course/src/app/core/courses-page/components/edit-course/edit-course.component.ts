import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription, take, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCourseItem } from 'src/app/core/state/courses/courses.selector';
import { editCourseItemFormSubmitted } from 'src/app/core/state/courses';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  course: ICourse = {
    date: '',
    description: '',
    duration: 0,
    id: 1,
    isTopRated: false,
    title: '',
    isDeleted: false,
  };

  courseForm!: FormGroup;

  constructor(
    private coursesDataService: CoursesDataService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        take(1),
        switchMap((params) => {
          const courseId = parseInt(params.get('id') as string);
          return this.store.select(selectCourseItem({ id: courseId }));
        }),
      )
      .subscribe((currentCourse: ICourse | null) => {
        const course = currentCourse;
        this.setCourse(course);
      });
  }

  editCourse(): void {
    const editCourse: ICourse = {
      id: this.course.id,
      ...this.courseForm.value,
    };

    this.store.dispatch(
      editCourseItemFormSubmitted({
        course: { ...editCourse, isDeleted: false },
      }),
    );
    this.router.navigate(['../']);
  }

  setCourseForm(form: FormGroup): void {
    this.courseForm = form;
  }

  setCourse(course: ICourse | null) {
    if (course) {
      this.course = course;
    } else {
      window.alert('there is no course with such id');
      this.router.navigate(['../']);
    }
  }
}
