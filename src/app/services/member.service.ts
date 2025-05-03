import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, map, of } from 'rxjs';
import { RegisterMember } from '../interfaces/register-member';
import { AbstractControl } from '@angular/forms';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  httpClient = inject(HttpClient);
  
  constructor() { 

    
  }

  register(form: any) {
    /*Attention : si besoin ailleur==> créer une fonction de mapping avec l'interface*/
    return this.httpClient.post(environment.baseApiUrl + '/member', form);
  }

  getAll() {
    return this.httpClient.get<Member[]>(environment.baseApiUrl + '/member')
  }

  //Non fonctionnel dans l'API pour le moment (à corriger)
  getAllMembersForGroupId(id: number) {
    return this.httpClient.get<any[]>(environment.baseApiUrl + '/group', {params: {groupId: id}})
  }

  existsEmail(email: string) {
    return this.httpClient.head(environment.baseApiUrl + '/member', {
      params: { email }
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }

  existsUsername( username : string) {

    return this.httpClient.head(environment.baseApiUrl + '/member', {
      params: { username }
    }).pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }
}
