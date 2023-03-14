import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  currentUser: IUser | null = null;

  constructor(private usersService: UsersService) {}

  login(canidate: Pick<IUser, 'email' | 'password'>) {
    const currentUser = this.usersService.checkCredentials(
      canidate.email,
      canidate.password,
    );
    console.log(currentUser);
    if (currentUser) {
      this.isLoggedIn = true;
    } else {
      throw new Error('Incorect email or password');
    }
  }

  signUp(newUser: IUserBody) {
    this.currentUser = this.usersService.addUser(newUser);
    if (this.currentUser) {
      this.isLoggedIn = true;
    } else {
      throw new Error('user with such Email already exists');
    }
  }
}
