import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EventModel } from '../models/event.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private httpClient = inject(HttpClient);

  constructor() { }

  getAll() {
    return this.httpClient.get<EventModel[]>('http://localhost:5045/api/meeting', { headers: {Authorization: "Bearer " + localStorage.getItem("TOKEN")}})
  }


  create(form: any) {
    return this.httpClient.post(environment.baseApiUrl + '/meeting', form);
  }

  update() {

  }

  delete() {
    
  }

}
