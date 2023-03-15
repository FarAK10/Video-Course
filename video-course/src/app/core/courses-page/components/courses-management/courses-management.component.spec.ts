import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesManagementComponent } from './courses-management.component';

import { SearchControlComponent } from '../search-control/search-control.component';
import { CoursesComponent } from '../courses/courses.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

import { MatIconModule } from '@angular/material/icon';
import { CoursesPageModule } from '../../courses-page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CoursesManagementComponent', () => {
  let component: CoursesManagementComponent;
  let fixture: ComponentFixture<CoursesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesManagementComponent,
        SearchControlComponent,
        CoursesComponent,
        FooterComponent,
      ],
      imports: [
        MatIconModule,
        CoursesPageModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
