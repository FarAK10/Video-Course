import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { Store } from '@ngrx/store';
import { selectIsUserLoggedIn } from 'src/app/core/state/user/user.selector';
import { OnReducer } from '@ngrx/store/src/reducer_creator';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnChanges, OnInit, OnDestroy {
  @Input() course: ICourse = {
    id: 1,
    date: '',
    description: '',
    duration: 10,
    title: '',
    isTopRated: false,
    isDeleted: false,
  };

  date: Date = new Date();

  id!: string;

  storeSub!: Subscription;

  isAuthorized!: boolean;

  constructor(public dialog: MatDialog, private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.id = this.course.id.toString();
    this.date = new Date(this.course.date);
  }

  ngOnInit(): void {
    this.storeSub = this.store
      .select(selectIsUserLoggedIn)
      .subscribe((isLoggedIn) => {
        this.isAuthorized = isLoggedIn;
      });
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.course,
    });
  }
}
