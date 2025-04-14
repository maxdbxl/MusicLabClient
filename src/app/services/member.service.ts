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

  existsEmail(input: string) {
    return this.httpClient.head(environment.baseApiUrl + '/member', {
      params: { input }
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }

  existsUsername(username: string, control: any) {
    console.log(control);
    return this.httpClient.head(environment.baseApiUrl + '/member', {
      params: { username }
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }
}
