import { HighlightDirective } from './highlight.directive';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseComponent } from 'src/app/main-page/components/course/course.component';
import { MatIconModule } from '@angular/material/icon';
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<CourseComponent>;
  let debugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseComponent,
        HighlightDirective,
      ],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    debugElement = fixture.debugElement.query(By.directive(HighlightDirective));
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(fixture);

    expect(directive).toBeTruthy();
  });

  it('should higligh the element with green border if the date is with last 14 days', () => {
    fixture.componentInstance.course.date = new Date().toISOString();
    fixture.detectChanges();

    expect(debugElement.nativeElement.style.border).toBe('2px solid green');
  });
});
