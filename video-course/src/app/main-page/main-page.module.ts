import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './main-page.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SearchControlComponent,
    CoursesComponent,
    CourseComponent,
    FooterComponent,
    MainPageComponent,
  ],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
