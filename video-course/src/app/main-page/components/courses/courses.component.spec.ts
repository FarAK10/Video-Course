import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from '../course/course.component';
import { MatIconModule } from '@angular/material/icon';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        CourseComponent,
        HighlightDirective,
        DurationPipe,
      ],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
