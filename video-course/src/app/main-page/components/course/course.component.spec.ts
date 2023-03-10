import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';
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
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
