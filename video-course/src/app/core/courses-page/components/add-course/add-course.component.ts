import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  course: ICourseBody={
    date: new Date().toString(),
    description: '',
    duration: 0,
    title: '',
    isTopRated:false
  };

  courseForm!: FormGroup;

  constructor(
    private coursesDataService: CoursesDataService,
    private router: Router,
  ) {}

  ngOnInit(): void {

  }
  addCourse(): void {
    const course: ICourseBody = this.courseForm.value;
    this.coursesDataService.addCourse(course);
    this.router.navigate(['../']);
  }

  setCourseForm(form: FormGroup): void {
    this.courseForm = form;

  }
}
