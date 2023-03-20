import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from './user.state';

export const selectUsers = createFeatureSelector<UsersState>('users');

export const selectUsersItems = createSelector(
  selectUsers,
  (state: UsersState) => state.users,
);

export const selectUsersItem = (props: { id: number }) =>
  createSelector(selectUsersItems, (users: IUser[]) => {
    const user = users.find((user) => (user.id = props.id));
    if (user) {
      return user;
    }
    return null;
  });

export const selectUsersCurrentItem = createSelector(
  selectUsers,
  (state: UsersState) => state.currentUser,
);

export const selectIsUserLoggedIn = createSelector(
  selectUsers,
  (state: UsersState) => state.isLoggedIn,
);
