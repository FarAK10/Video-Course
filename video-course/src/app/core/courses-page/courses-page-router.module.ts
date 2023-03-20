import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesManagementComponent } from './components/courses-management/courses-management.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AuthGuard } from '../services/auth/auth.gurad';
const routes: Routes = [
  {
    path: 'new',
    component: AddCourseComponent,
    title: 'New Course',
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: EditCourseComponent,
    title: 'Edit course',
    canActivate: [AuthGuard],
  },

  {
    path: '',
    component: CoursesManagementComponent,
    title: 'Courses',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRouterModule {}
