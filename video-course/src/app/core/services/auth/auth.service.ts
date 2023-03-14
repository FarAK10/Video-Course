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
    const currentUser = this.usersService.getUserByEmail(
      canidate.email,
      canidate.password,
    );
    console.log(currentUser);
    if (currentUser === null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }
}
