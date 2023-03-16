import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from '../course/course.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { DurationPipe } from 'src/app/core/shared/pipes/duration-pipe/duration.pipe';
import { FilterPipe } from 'src/app/core/shared/pipes/filter-pipe/filter.pipe';
import { OrderByPipe } from 'src/app/core/shared/pipes/orderBy-pipe/order-by.pipe';

import { HighlightDirective } from 'src/app/core/shared/directives/highlight.directive';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { convertToParamMap } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { CoursesPageModule } from '../../courses-page.module';
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
      providers: [
        FilterPipe,
        {
          provide: ActivatedRoute,
          useValue: { paramMap: convertToParamMap({ id: '1' }) },
        },
      ],
      imports: [
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        CoursesPageModule,
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
