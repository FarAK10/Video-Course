import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../helpers/password-match-validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hide = false;

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
    console.log;
    if (this.signupForm.valid) {
      const login = this.signupForm.value;
    }
  }
}
