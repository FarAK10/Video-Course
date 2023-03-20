import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { SearchControlComponent } from './components/search-control/search-control.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesPageComponent } from './courses-page.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { CoursesPageModule } from './courses-page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivatedRoute } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
describe('MainPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;
  const activatedRouteStub = {
    paramMap: new BehaviorSubject({
      get: (key: string) => '1',
    }),
  };
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
        CoursesPageModule,
        BrowserAnimationsModule,
        RouterModule.forChild([]),
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
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
