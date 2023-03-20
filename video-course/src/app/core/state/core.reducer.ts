import { ActionReducerMap, MetaReducer } from '@ngrx/store/src';
import { State } from './core.state';

import * as CoursesReducer from './courses/courses.reducer';

export const reducers: ActionReducerMap<State> = {
  courses: CoursesReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
