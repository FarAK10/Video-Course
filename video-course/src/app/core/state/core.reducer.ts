import { ActionReducerMap, MetaReducer } from '@ngrx/store/src';
import { State } from './core.state';

import * as CoursesReducer from './courses/courses.reducer';
import * as UsersReducer from './user/user.reducer';

export const reducers: ActionReducerMap<State> = {
  courses: CoursesReducer.reducer,
  users: UsersReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
