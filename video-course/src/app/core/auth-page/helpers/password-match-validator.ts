import { AbstractControl } from '@angular/forms';

export function passwordMatchValidator(
  control: AbstractControl,
): { [key: string]: boolean } | null {
  const confirmPassword = control.get('confirmPassword');
  const password = control.get('password');
  if (password?.value !== confirmPassword?.value) {
    return { passwordsMisMatch: true };
  }
  return null;
}
