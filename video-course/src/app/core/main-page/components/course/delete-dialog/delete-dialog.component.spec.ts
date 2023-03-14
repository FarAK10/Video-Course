import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogComponent } from './delete-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilterPipe } from 'src/app/core/shared/pipes/filter-pipe/filter.pipe';
describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        FilterPipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
