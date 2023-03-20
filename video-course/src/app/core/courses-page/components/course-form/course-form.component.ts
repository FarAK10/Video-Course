import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;

  @Input() course: ICourseBody = {
    date: '',
    title: '',
    description: '',
    duration: 0,
    isTopRated: false,
    isDeleted: false,
  };

  @Output() courseFormChange = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: [
        this.course.title,
        [Validators.required],
      ],
      description: [
        this.course.description,
        [Validators.required],
      ],
      date: [
        new Date(this.course.date),
        [
          Validators.required,
        ],
      ],
      duration: [
        this.course.duration,
        [
          Validators.required,
          Validators.min(0),
        ],
      ],
      isTopRated: [
        this.course.isTopRated,
      ],
    });
    this.onChange();
  }

  onChange() {
    this.courseFormChange.emit(this.courseForm);
  }
}
