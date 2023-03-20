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

  checkCredentials(email: string, password: string): IUser | null {
    const user = this.users.find(
      (user: IUser) => user.email === email && user.password === password,
    );
    if (user === undefined) {
      return null;
    } else {
      return user;
    }
  }

  addUser(newUserBody: IUserBody): IUser | null {
    const isEmailUnique = this.isEmailUnique(newUserBody.email);
    if (isEmailUnique) {
      const newUser: IUser = {
        id: this.users.length + 1,
        ...newUserBody,
      };
      this.users.push(newUser);
      return newUser;
    }
    return null;
  }

  isEmailUnique(email: string): boolean {
    let isUnique = true;
    this.users.forEach((user: IUser) => {
      if (user.email === email) {
        isUnique = false;
      }
    });
    return isUnique;
  }

  constructor() {}
}
