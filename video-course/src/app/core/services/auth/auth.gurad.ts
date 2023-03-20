import { Injectable, OnDestroy } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';

import { AuthService } from './auth.service';
import { Observable, Subscription, flatMap } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectIsUserLoggedIn,
  selectUsersCurrentItem,
} from '../../state/user/user.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store,
  ) {}

  storeSub!: Subscription;

  isLoggedIn!: boolean;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.storeSub = this.store
      .select(selectIsUserLoggedIn)
      .subscribe((isLogged) => {
        this.isLoggedIn = isLogged;
      });
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/signup']);
      return false;
    }
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
