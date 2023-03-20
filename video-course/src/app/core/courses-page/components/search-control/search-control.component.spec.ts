import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlComponent } from './search-control.component';

import { FilterPipe } from 'src/app/core/shared/pipes/filter-pipe/filter.pipe';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchControlComponent],
      imports: [
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        { provide: MatFormFieldControl, useExisting: SearchControlComponent },
        FilterPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
