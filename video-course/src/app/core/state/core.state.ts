import { CoursesState } from './courses/courses.state';
import { UsersState } from './user';
export interface State {
  courses: CoursesState;
  users: UsersState;
}
