import { Injectable } from '@angular/core';
import { users } from '../../shared/data/users';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users = users.slice();

  getUsers() {
    return users;
  }

  getUserByEmail(email: string, password: string): IUser | null {
    const user = this.users.find(
      (user: IUser) => user.email === email && user.password === password,
    );
    if (user === undefined) {
      return null;
    } else {
      return user;
    }
  }

  constructor() {}
}
