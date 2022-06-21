import {AbstractControl} from '@angular/forms'

export function PasswordValidator(control: AbstractControl):any{
  const pass = control.get('password');
  const confirmPass = control.get('confirmPass');
  return pass && confirmPass && pass.value != confirmPass.value ? {'misMatch':true} : null;
}
