import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { users } from '../../shared/data/users';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('should return the list of users', () => {
      const result = service.getUsers();

      expect(result).toEqual(users);
    });
  });

  describe('checkCredentials', () => {
    it('should return null if email or password is incorrect', () => {
      const result = service.checkCredentials(
        'fakeemail@test.com',
        'fakepassword',
      );

      expect(result).toBeNull();
    });

    it('should return a user object if email and password are correct', () => {
      const result = service.checkCredentials('user1@test.com', 'password1');

      expect(result).toEqual(users[0]);
    });
  });

  describe('addUser', () => {
    it('should add a new user if email is unique', () => {
      const newUser: IUserBody = {
        firstName: 'New User',
        lastName: 'botirov',
        email: 'newuser@test.com',
        password: 'newpassword',
      };
      const result = service.addUser(newUser);

      expect(result).toEqual({ id: 4, ...newUser });
    });

    it('should return null if email is not unique', () => {
      const existingUser = users[0];
      const result = service.addUser(existingUser);

      expect(result).toBeNull();
    });
  });

  describe('isEmailUnique', () => {
    it('should return true if email is unique', () => {
      const result = service.isEmailUnique('newuser@test.com');

      expect(result).toBe(true);
    });

    it('should return false if email is not unique', () => {
      const result = service.isEmailUnique('user1@test.com');

      expect(result).toBe(false);
    });
  });
});
