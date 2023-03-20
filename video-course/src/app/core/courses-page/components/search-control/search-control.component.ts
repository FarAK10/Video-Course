import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { CoursesDataService } from '../../services/courses-data.service';
import { Store } from '@ngrx/store';
import { searchInputSubmitted } from 'src/app/core/state/courses';
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

  constructor(
    private coursesDataService: CoursesDataService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.searchContorlSub = this.searchControl.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((searchString) => {
        this.store.dispatch(
          searchInputSubmitted({ searchInput: searchString }),
        );
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
