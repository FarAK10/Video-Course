
import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../../services/courses-data.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import {  FormGroup } from '@angular/forms';
import { Subscription, take } from 'rxjs';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit{
  course!: ICourse

  courseForm!: FormGroup;




  constructor(
    private coursesDataService: CoursesDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((params)=>{
      console.log(params)
      const courseId = parseInt(params.get('id') as string)
       const course = this.coursesDataService.getCourseById(courseId);
       console.log(course,'course id')
      this.setCourse(course)

      console.log(courseId,'id')
    })
  }


  editCourse(): void {

    const editCourse: ICourse = {
      id:this.course.id,
      ...this.courseForm.value}

    this.coursesDataService.editCourse(editCourse);
    this.router.navigate(['../']);
  }

  setCourseForm(form: FormGroup): void {
    this.courseForm = form;
  }
  setCourse(course:ICourse|null){
    if(course){
      this.course = course
      console.log(course)
    } else {
      window.alert('there is no course with such id')
      this.router.navigate(['../'])
    }
  }


}
