import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  httpClient = inject(HttpClient);
  
  constructor() { }

  register(form: any) {
    return this.httpClient.post(environment.baseApiUrl + '/member', form);
  }

  exists(email: string) {
    return this.httpClient.head(environment.baseApiUrl + '/member', {
      params: { email }
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }
}
