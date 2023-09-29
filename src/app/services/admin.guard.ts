import { inject } from '@angular/core';
import {  CanActivateFn, Router } from '@angular/router';
export const adminGuard: CanActivateFn = (route , state) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const userRole = localStorage.getItem('adminRole');
  const router = inject(Router);
  if(isLoggedIn == 'true' && userRole == 'ADMIN'){
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('adminRole');
    return true;
  }
  router.navigate(['']);
  return false;
};


