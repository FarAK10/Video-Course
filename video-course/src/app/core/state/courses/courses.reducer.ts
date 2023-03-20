import { Action, createReducer, on } from '@ngrx/store';
import * as CoursesActions from './courses.actions';
import { initialState, CoursesState } from './courses.state';
import { isEqualCheck } from '@ngrx/store/src/selector';
import { courses } from '../../shared/data/courses';

const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.addCourseItemFormSubmitted, (state, { courseBody }) => {
    const newCourse = {
      ...courseBody,
      id: state.courses.length + 1,
    };
    const courses = [
      ...state.courses,
      newCourse,
    ];
    return {
      ...state,
      courses: courses,
    };
  }),
  on(CoursesActions.deleteCourseItem, (state, { id }) => {
    const courseItemIndex = state.courses.findIndex(
      (item: ICourse) => item.id === id,
    );
    const updatedCourses = [...state.courses];
    updatedCourses.splice(courseItemIndex, 1);
    return {
      ...state,
      courses: updatedCourses,
    };
  }),

  on(CoursesActions.editCourseItemFormSubmitted, (state, { course }) => {
    const courseItemIndex = state.courses.findIndex(
      (item: ICourse) => item.id === course.id,
    );
    const updatedCourses = [...state.courses];
    updatedCourses[courseItemIndex] = course;

    return {
      ...state,
      courses: updatedCourses,
    };
  }),
  on(CoursesActions.searchInputSubmitted, (state, { searchInput }) => {
    return {
      ...state,
      searchInput: searchInput,
    };
  }),
);

export function reducer(state: CoursesState | undefined, action: Action) {
  return coursesReducer(state, action);
}
