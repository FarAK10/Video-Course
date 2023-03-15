import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HighlightDirective } from 'src/app/core/shared/directives/highlight.directive';

import { DurationPipe } from 'src/app/core/shared/pipes/duration-pipe/duration.pipe';
describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        HighlightDirective,
        DurationPipe,
      ],
      imports: [
        MatIconModule,
        MatDialogModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
