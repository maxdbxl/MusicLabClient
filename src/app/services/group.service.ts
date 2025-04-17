import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  httpClient = inject(HttpClient)

  constructor() { }

  create(form: any) {
    return this.httpClient.post(environment.baseApiUrl + '/company', form)
  }

  existsGroup(group: string) {
    return this.httpClient.head(environment.baseApiUrl + '/company', {
      params: { group }
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }
}
