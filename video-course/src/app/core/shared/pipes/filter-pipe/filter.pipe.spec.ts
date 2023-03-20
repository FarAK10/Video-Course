import { FilterPipe } from './filter.pipe';
import { mockCourses } from './mock-testing-data';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter an array of courses by title', () => {
    const searchText = 'angular';

    const filteredCourses = pipe.transform(mockCourses, searchText);

    expect(filteredCourses.length).toBe(1);
    expect(filteredCourses[0].title).toBe('Angular Fundamentals');
  });

  it('should return an empty array if there are no matching courses', () => {
    const searchText = 'redux';

    const filteredCourses = pipe.transform(mockCourses, searchText);

    expect(filteredCourses.length).toBe(0);
  });
});
