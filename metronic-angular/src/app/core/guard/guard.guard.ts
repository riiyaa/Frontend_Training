import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
export const guard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  if(!auth.isLoggedin()){
    inject(Router).navigate(['login']);
    return false;
  }
  return true;
};







