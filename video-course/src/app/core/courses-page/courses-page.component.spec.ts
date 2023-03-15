import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesPageComponent } from './courses-page.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MainPageModule } from './courses-page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MainPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        HeaderComponent,
        CourseComponent,
        SearchControlComponent,
        CoursesComponent,
        FooterComponent,
      ],
      imports: [
        MatIconModule,
        MainPageModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
