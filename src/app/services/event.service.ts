import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private httpClient = inject(HttpClient);

  constructor() { }

  getAll() {
    return this.httpClient.get<EventModel[]>('http://localhost:5045/meetings')
  }

  add() {

  }

  update() {

  }

  delete() {
    
  }

}
