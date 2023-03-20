import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from './user.actions';
import { initialState, UsersState } from './user.state';
import { getFromLocalStorage } from '../helpers/getFromLocalStorage';

const localInitialState = getFromLocalStorage('users');
let usersState;
if (localInitialState) {
  usersState = JSON.parse(localInitialState) as UsersState;
}

const usersReducer = createReducer(
  usersState || initialState,
  on(
    UsersActions.loginFormSubmitted,
    (state: UsersState, { email, password }) => {
      const user =
        state.users.find(
          (user) => user.email === email && user.password === password,
        ) || null;
      const isLoggedIn = user ? true : false;
      return {
        ...state,
        currentUser: user,
        isLoggedIn: isLoggedIn,
      };
    },
  ),
  on(UsersActions.signUpFormSubmitted, (state: UsersState, { userBody }) => {
    const user = {
      id: state.users.length,
      ...userBody,
    };
    const users = [
      ...state.users,
      user,
    ];

    return {
      ...state,
      currentUser: user,
      users: users,
      isLoggedIn: true,
    };
  }),

  on(UsersActions.logoutButtonPressed, (state: UsersState, {}) => {
    return {
      ...state,
      currentUser: null,
      isLoggedIn: false,
    };
  }),
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
