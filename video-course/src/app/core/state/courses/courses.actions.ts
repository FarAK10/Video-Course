import { createAction, props } from '@ngrx/store';

export const addCourseItemFormSubmitted = createAction(
  '[Add Course] Add Course Item Form submitted',
  props<{ courseBody: ICourseBody }>(),
);

export const editCourseItemFormSubmitted = createAction(
  '[Edit course] Edit Course Item Form Submitted',
  props<{ course: ICourse }>(),
);

export const deleteCourseItem = createAction(
  '[Delete course], Delete Course Button pressed',
  props<{ id: number }>(),
);

export const searchInputSubmitted = createAction(
  '[Search input changed] Search string submitted',
  props<{ searchInput: string }>(),
);
