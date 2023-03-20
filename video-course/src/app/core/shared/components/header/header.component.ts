import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { logoutButtonPressed } from 'src/app/core/state/user/user.actions';
import { selectUsersCurrentItem } from 'src/app/core/state/user/user.selector';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = this.authService.isLoggedIn;

  user!: IUser | null;

  userSub!: Subscription;

  constructor(private authService: AuthService, private store: Store) {}

  onLogout() {
    localStorage.removeItem('courses');
    localStorage.removeItem('users');
    this.store.dispatch(logoutButtonPressed());
  }

  ngOnInit(): void {
    this.userSub = this.store
      .select(selectUsersCurrentItem)
      .subscribe((user: IUser | null) => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
