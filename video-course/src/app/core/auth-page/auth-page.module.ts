import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
  ],
})
export class AuthPageModule {}
