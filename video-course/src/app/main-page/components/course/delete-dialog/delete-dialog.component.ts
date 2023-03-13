import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseComponent } from '../course.component';
import { CoursesDataService } from 'src/app/main-page/services/courses-data.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
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
