import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  private currentUser: IUser | null = null;

  currentUser$ = new BehaviorSubject<IUser | null>(this.currentUser);

  constructor(private usersService: UsersService) {}

  login(canidate: Pick<IUser, 'email' | 'password'>) {
    this.currentUser = this.usersService.checkCredentials(
      canidate.email,
      canidate.password,
    );
    console.log(this.currentUser);
    if (this.currentUser) {
      this.isLoggedIn = true;

      console.log(this.isLoggedIn);
      this.currentUser$.next(this.currentUser);
    } else {
      throw new Error('Incorect email or password');
    }
  }

  signUp(newUser: IUserBody) {
    this.currentUser = this.usersService.addUser(newUser);
    if (this.currentUser) {
      this.isLoggedIn = true;
      this.currentUser$.next(this.currentUser);
    } else {
      throw new Error('user with such Email already exists');
    }
  }

  logout(): void {
    this.currentUser = null;
    this.isLoggedIn = false;
    this.currentUser$.next(this.currentUser);
  }

  getCurrentUser$(): Observable<IUser | null> {
    return this.currentUser$;
  }
}
