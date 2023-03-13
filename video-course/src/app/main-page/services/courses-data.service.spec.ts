import { TestBed } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';

describe('CoursesService', () => {
  let service: CoursesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterPipe],
    });
    service = TestBed.inject(CoursesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
