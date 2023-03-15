import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesDataService } from '../../../services/courses-data.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public course: ICourse,
    private courseDataService: CoursesDataService,
  ) {}

  onDelete() {
    this.courseDataService.deleteCourse(this.course.id);
  }
}
