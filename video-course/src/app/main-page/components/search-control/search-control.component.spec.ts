import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlComponent } from './search-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
      ],
      providers: [{ provide: MatFormFieldControl, useExisting: SearchControlComponent }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
