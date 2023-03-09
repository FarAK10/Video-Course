import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { CoursesComponent } from './components/courses/courses.component';
import { MainPageComponent } from './main-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MainPageModule } from './main-page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
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

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
