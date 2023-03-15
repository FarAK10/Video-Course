import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  authors = [
    'John',
    'Andrew',
  ];

  courseForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private couresDataService: CoursesDataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: [
        '',
        [Validators.required],
      ],
      description: [
        '',
        [Validators.required],
      ],
      date: [
        new Date(),
        [
          Validators.required,
        ],
      ],
      duration: [
        0,
        [
          Validators.required,
          Validators.min(0),
        ],
      ],
    });
  }

  addCourse() {
    const course: ICourseBody = this.courseForm.value;
    this.couresDataService.addCourse(course);
    this.router.navigate(['../']);
  }
}
