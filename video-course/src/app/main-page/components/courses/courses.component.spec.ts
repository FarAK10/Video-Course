import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from '../course/course.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { DurationPipe } from 'src/app/shared/pipes/duration-pipe/duration.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/orderBy-pipe/order-by.pipe';

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
        OrderByPipe,
      ],
      providers: [FilterPipe],
      imports: [
        MatIconModule,
        MatDialogModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
