import { TestBed } from '@angular/core/testing';

import { CoursesDataService } from './courses-data.service';
import { FilterPipe } from '../../shared/pipes/filter-pipe/filter.pipe';
const newCourse: ICourseBody = {
  title: 'New course',
  date: new Date().toString(),
  description: '',
  duration: 20,
  isTopRated: false,
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

  //   it('should add a course',()=>{
  //     const initialLength = service['courses'].length;

  //     service.addCourse(newCourse)
  //     expect(service['courses'].length).toEqual(initialLength + 1);
  //     expect(service['courses'][initialLength]).toEqual({
  //       id: initialLength + 1,
  //       ...newCourse,
  //     });
  //   })

  //     it('should edit a course', () => {
  //     const courseId = 1;
  //     const updatedCourse:ICourse = {
  //       id: courseId,
  //       title: 'Updated Course',
  //       description: 'This course has been updated.',
  //       date: '2023-03-17',
  //       duration: 90,
  //       isTopRated:false

  //     };
  //     service.editCourse(updatedCourse);
  //     const course = service.getCourseById(courseId);
  //     expect(course).toEqual(updatedCourse);
  //   });
  //   it('should delete a course', () => {
  //     const courseId = 1;
  //     const initialLength = service['courses'].length;
  //     service.deleteCourse(courseId);
  //     expect(service['courses'].length).toEqual(initialLength - 1);
  //     expect(service.getCourseById(courseId)).toBeNull();
  //   });

  //   it('should return a course by ID', () => {
  //     const courseId = 1;
  //     const course = service.getCourseById(courseId);
  //     expect(course).toBeTruthy();
  //     expect(course?.id).toEqual(courseId);
  //   });

  //   it('should return filtered courses', () => {
  //     const searchTerm = 'Angular';
  //     const courses = service.getCourses(searchTerm);
  //     courses.subscribe((filteredCourses) => {
  //       expect(filteredCourses.length).toBeGreaterThan(0);
  //       expect(filteredCourses.every((course) =>
  //         course.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       )).toBeTruthy();
  //     });
  // })
});
