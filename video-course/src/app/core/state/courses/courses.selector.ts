import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';

export const selectCourses = createFeatureSelector<CoursesState>('courses');

export const selectCoursesItems = createSelector(
  selectCourses,
  (state: CoursesState) => state.courses,
);

export const selectCourseItem = (props: { id: number }) =>
  createSelector(selectCoursesItems, (courseItems: ICourse[]) => {
    const course = courseItems.find((course) => course.id === props.id);
    if (course) {
      return course;
    }
    return null;
  });

export const selectSearchInputValue = createSelector(
  selectCourses,
  (state: CoursesState) => state.searchInput,
);
