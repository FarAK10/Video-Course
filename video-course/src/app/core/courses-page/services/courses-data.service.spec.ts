import { TestBed } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';
import { FilterPipe } from '../../shared/pipes/filter-pipe/filter.pipe';
import { mockCourses } from './mock-courses';
const newCourse: ICourseBody = {
  title: 'New course',
  date: new Date().toString(),
  description: '',
  duration: 20,
  isTopRated: false,
  isDeleted: false,
};
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

  it('should return a list of courses', (done: DoneFn) => {
    const courses$ = service.getCourses();
    courses$.subscribe((courses) => {
      expect(courses.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should filter courses based on search term', (done: DoneFn) => {
    const searchTerm = 'angular';
    service['courses$'].next(mockCourses);
    const courses$ = service.getCourses(searchTerm);
    courses$.subscribe((courses) => {
      expect(courses.length).toBeGreaterThan(0);
      expect(courses.every((course) => course.title.includes(searchTerm))).toBe(
        true,
      );
      done();
    });
  });

  it('should add a new course', () => {
    const initialCoursesLength = service['courses'].length;
    const newCourse: ICourseBody = {
      title: 'New Course',
      duration: 120,
      date: '2022-03-16',
      description: 'This is a new course',
      isTopRated: false,
      isDeleted: false,
    };
    service.addCourse(newCourse);

    expect(service['courses'].length).toBe(initialCoursesLength + 1);
  });

  it('should update an existing course', () => {
    service['courses'] = mockCourses.slice();
    const updatedCourse: ICourse = {
      id: 1,
      title: 'Updated Course',
      duration: 90,
      date: '2022-03-16',
      description: 'This course has been updated',
      isTopRated: true,
      isDeleted: false,
    };
    service.editCourse(updatedCourse);
    const course = service.getCourseById(updatedCourse.id);

    expect(course).toEqual(updatedCourse);
  });

  it('should delete a course', () => {
    const initialCoursesLength = service['courses'].length;
    const courseToDelete = service['courses'][0];
    service.deleteCourse(courseToDelete.id);

    expect(service['courses'].length).toBe(initialCoursesLength - 1);
    const deletedCourse = service.getCourseById(courseToDelete.id);

    expect(deletedCourse).toBeNull();
  });
});
