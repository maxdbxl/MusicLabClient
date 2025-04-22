import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  
  UserId = parseInt(localStorage.getItem("UserId") ?? "-1")
}
