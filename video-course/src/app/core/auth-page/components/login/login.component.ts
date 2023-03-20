import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Store } from '@ngrx/store';
import { loginFormSubmitted } from 'src/app/core/state/user/user.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      try {
        const userInput = this.loginForm.value;
        this.store.dispatch(loginFormSubmitted(userInput));
      } catch (err) {
        if (err instanceof Error) {
          this.dialog.open(ErrorDialogComponent, { data: err });
        }
      }
    }
  }
}
