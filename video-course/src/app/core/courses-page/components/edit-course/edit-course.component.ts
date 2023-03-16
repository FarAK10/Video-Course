import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Subscription, take } from 'rxjs';
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
  };

  courseForm!: FormGroup;

  constructor(
    private coursesDataService: CoursesDataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      const courseId = parseInt(params.get('id') as string);
      const course = this.coursesDataService.getCourseById(courseId);

      this.setCourse(course);
    });
  }

  editCourse(): void {
    const editCourse: ICourse = {
      id: this.course.id,
      ...this.courseForm.value,
    };

    this.coursesDataService.editCourse(editCourse);
    this.router.navigate(['../']);
  }

  setCourseForm(form: FormGroup): void {
    this.courseForm = form;
  }

  setCourse(course: ICourse | null) {
    if (course) {
      this.course = course;
      console.log(course);
    } else {
      window.alert('there is no course with such id');
      this.router.navigate(['../']);
    }
  }
}
