import { courses } from '../../shared/data/courses';

export interface CoursesState {
  courses: ICourse[];
  searchInput: string;
}

export const initialState: CoursesState = {
  courses: courses,
  searchInput: '',
};
