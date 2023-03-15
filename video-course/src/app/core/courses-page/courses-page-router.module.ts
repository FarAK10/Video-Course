import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesManagementComponent } from './components/courses-management/courses-management.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesManagementComponent,
    title: 'Courses',
  },
  {
    path: 'new',
    component: CourseFormComponent,
    title: 'New Course',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRouterModule {}
