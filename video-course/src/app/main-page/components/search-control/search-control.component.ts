import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { CoursesDataService } from '../../services/courses-data.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: [
    './search-control.component.scss',
  ],
})
export class SearchControlComponent implements OnInit, OnDestroy {
  searchControl = new FormControl();

  searchContorlSub!: Subscription;

  constructor(private coursesDataService: CoursesDataService) {}

  ngOnInit() {
    this.searchContorlSub = this.searchControl.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((searchString) => {
        this.coursesDataService.setSearchTerm(searchString);
      });
  }

  onSearch() {
    const searchString = this.searchControl.value;
    this.coursesDataService.setSearchTerm(searchString);
  }

  ngOnDestroy(): void {
    this.searchContorlSub.unsubscribe();
  }
}
