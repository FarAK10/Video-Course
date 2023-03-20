import { users } from '../../shared/data/users';

export interface UsersState {
  users: IUser[];
  currentUser: IUser | null;
  isLoggedIn: boolean;
}

export const initialState: UsersState = {
  users: users,
  currentUser: null,
  isLoggedIn: false,
};
