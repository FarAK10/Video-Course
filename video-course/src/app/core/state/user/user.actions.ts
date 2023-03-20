import { createAction, props } from '@ngrx/store';

export const signUpFormSubmitted = createAction(
  '[Sign Up] sign Up Form Submitted',
  props<{ userBody: IUserBody }>(),
);

export const loginFormSubmitted = createAction(
  '[Login] Login form Submitted',
  props<{ email: string; password: string }>(),
);

export const logoutButtonPressed = createAction(
  '[Logout], Logout  after logout button pressed',
);
