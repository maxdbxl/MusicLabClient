import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, of } from 'rxjs';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  httpClient = inject(HttpClient)

  constructor() { }

  create(form: any) {
    return this.httpClient.post(environment.baseApiUrl + '/company', form)
  }

  getAll() {
    return this.httpClient.get<Group[]>(environment.baseApiUrl + '/company')
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
