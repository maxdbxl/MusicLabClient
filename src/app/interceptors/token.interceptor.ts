import { HttpInterceptorFn } from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const sessionService = inject(SessionService);
  let token = sessionService.session().token;

  if (!token) {
    return next(req);
  }
  const clone = req.clone({setHeaders: {
    Authorization: 'Bearer ' + token
  }});
  return next(clone);

  
};
