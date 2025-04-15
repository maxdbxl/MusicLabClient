import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  httpClient = inject(HttpClient)

  constructor() { }

  create(form: any) {
    return this.httpClient.post(environment.baseApiUrl + '/company', form)
  }
}
