import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  if(inject(SessionService).session().isAuthenticated) {
    return true;
  }


  const router = inject(Router);
  router.navigate(['login']);
  return false;
};
