import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoursesPageModule } from '../../courses-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFormComponent],
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        CoursesPageModule,
        StoreModule.forRoot({}),
        BrowserAnimationsModule,
      ],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
