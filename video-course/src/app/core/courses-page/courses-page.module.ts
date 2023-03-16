import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchControlComponent } from './components/search-control/search-control.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesPageComponent } from './courses-page.component';
import { DeleteDialogComponent } from './components/course/delete-dialog/delete-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CoursesPageRouterModule } from './courses-page-router.module';

import { DurationPipe } from '../shared/pipes/duration-pipe/duration.pipe';
import { FilterPipe } from '../shared/pipes/filter-pipe/filter.pipe';
import { OrderByPipe } from '../shared/pipes/orderBy-pipe/order-by.pipe';

import { HighlightDirective } from '../shared/directives/highlight.directive';

import { CourseFormComponent } from './components/course-form/course-form.component';
import { CoursesManagementComponent } from './components/courses-management/courses-management.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
@NgModule({
  declarations: [
    HighlightDirective,
    SearchControlComponent,
    CoursesComponent,
    CourseComponent,
    CoursesPageComponent,
    DurationPipe,
    DeleteDialogComponent,
    OrderByPipe,
    CourseFormComponent,
    CoursesManagementComponent,
    AddCourseComponent,
    EditCourseComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    CoursesPageRouterModule,
    MatCheckboxModule,
  ],
  exports: [
    CoursesPageComponent,
  ],
  providers: [FilterPipe],
})
export class CoursesPageModule {}
