import { HighlightDirective } from './highlight.directive';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseComponent } from '../../main-page/components/course/course.component';
import { MatIconModule } from '@angular/material/icon';
import { DurationPipe } from '../pipes/duration-pipe/duration.pipe';
import { MatDialogModule } from '@angular/material/dialog';
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<CourseComponent>;
  let debugElement: DebugElement;
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
    debugElement = fixture.debugElement.query(By.directive(HighlightDirective));
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(fixture);

    expect(directive).toBeTruthy();
  });

  it('should higligh the element with green border if the date is with last 14 days', () => {
    fixture.componentInstance.course.date = '05 October 2011 14:48 UTC';
    fixture.detectChanges();

    expect(debugElement.nativeElement.style.border).toBe('2px solid green');
  });

  it('should  highlight the element with blue bordder if the creation date happened after current time', () => {
    fixture.componentInstance.course.date = '05 October 2100 14:48 UTC';
    fixture.detectChanges();

    expect(debugElement.nativeElement.style.border).toBe('2px solid blue');
  });
});
