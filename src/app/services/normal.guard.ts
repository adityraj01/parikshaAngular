import { inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
export const normalGuard: CanActivateFn = (route , state) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userRole = localStorage.getItem('normalRole');
  const router = inject(Router);
  if(isLoggedIn == 'true' && userRole == 'NORMAL'){

    return true;
  }
  router.navigate(['']);
  return false;
};


