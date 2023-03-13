import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './main-page.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DurationPipe } from '../shared/pipes/duration-pipe/duration.pipe';
import { FilterPipe } from '../shared/pipes/filter-pipe/filter.pipe';
import { OrderByPipe } from '../shared/pipes/orderBy-pipe/order-by.pipe';

import { HighlightDirective } from '../shared/directives/highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    HeaderComponent,
    SearchControlComponent,
    CoursesComponent,
    CourseComponent,
    FooterComponent,
    MainPageComponent,
    DurationPipe,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainPageComponent,
  ],
  providers: [FilterPipe],
})
export class MainPageModule {}
