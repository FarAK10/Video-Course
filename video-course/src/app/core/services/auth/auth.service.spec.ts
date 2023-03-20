import { TestBed } from '@angular/core/testing';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import { dummyuser } from './auth-service-mock-data';
import { mockCourses } from '../../courses-page/services/mock-courses';
describe('AuthService', () => {
  let authService: AuthService;
  let userServiceSpy: jasmine.SpyObj<UsersService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', [
      'checkCredentials',
      'addUser',
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: UsersService,
          useValue: spy,
        },
      ],
    });
    authService = TestBed.inject(AuthService);
    userServiceSpy = TestBed.inject(
      UsersService,
    ) as jasmine.SpyObj<UsersService>;
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  describe('login', () => {
    it('should set currentUser and isLoggedIn to true if credentials are correct', () => {
      const user = {
        ...dummyuser,
      };
      userServiceSpy.checkCredentials.and.returnValue(user);
      authService.login({ email: 'jack@gmail.com', password: 'ffff' });

      expect(authService['currentUser']).toEqual(user);
      expect(authService.isLoggedIn).toBeTruthy();
    });
  });

  it('should throw error if credentials are incorrect', () => {
    userServiceSpy.checkCredentials.and.returnValue(null);

    expect(() =>
      authService.login({ email: 'john@gmail.com', password: '1111111' }),
    ).toThrowError('Incorrect email or password');
  });

  describe('signUp', () => {
    it('should set currentUser after adding new user', () => {
      const mockUser = {
        ...dummyuser,
      };
      userServiceSpy.addUser.and.returnValue(mockUser);

      authService.signUp(mockUser);

      expect(authService.isLoggedIn).toBeTruthy();
      expect(authService['currentUser']).toEqual(mockUser);
    });

    it('should throw an error if user want to signUp with not unique email', () => {
      const mockUser = {
        ...dummyuser,
      };
      userServiceSpy.addUser.and.returnValue(null);

      expect(() => authService.signUp(mockUser)).toThrowError(
        'user with such Email already exists',
      );
    });
  });

  describe('logout', () => {
    it('should set currentUser to null and isLoggedIn to false', () => {
      authService['currentUser'] = {
        ...dummyuser,
      };

      authService.isLoggedIn = true;
      authService.logout();

      expect(authService['currentUser']).toBeNull();
      expect(authService['isLoggedIn']).toBeFalse();
    });
  });

  describe('getCurrentUser$', () => {
    it('should return a BehaviourSubject with the current user', (done: DoneFn) => {
      authService['currentUser'] = {
        ...dummyuser,
      };

      const currentUser$ = authService.getCurrentUser$();

      expect(currentUser$ instanceof BehaviorSubject).toBeTruthy();

      currentUser$.subscribe((v) => {
        expect(v).toEqual(dummyuser);
        done();
      });
    });
  });
});
