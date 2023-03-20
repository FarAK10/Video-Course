import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../helpers/password-match-validator';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Store } from '@ngrx/store';
import { signUpFormSubmitted } from 'src/app/core/state/user/user.actions';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = false;

  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        firstName: [
          '',
          [Validators.required],
        ],
        lastName: [
          '',
          [Validators.required],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
          ],
        ],
      },
      { validator: passwordMatchValidator },
    );
  }

  onSubmit() {
    const userBody: IUserBody = this.signupForm.value;
    try {
      this.store.dispatch(signUpFormSubmitted({ userBody }));
      this.router.navigate(['/courses']);
    } catch (err) {
      if (err instanceof Error) {
        this.dialog.open(ErrorDialogComponent, { data: err });
      }
    }
  }
}
