import { Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly SESSION_KEY = 'TOKEN';

  constructor() { 
    const token = localStorage.getItem(this.SESSION_KEY);
    if (token) {
      this.start(token);
    }
  }
  
  // UserId = parseInt(localStorage.getItem("UserId") ?? "-1")

  session = signal<any>({});

  start(token: string) {
    const decodedToken: any = jwtDecode(token);
    this.session.set({
      isAuthenticated: true,
      token,
      exp: new Date(decodedToken.exp * 1000),
      email: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
      id: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
      role: decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
    });
    localStorage.setItem(this.SESSION_KEY, token);
  }

  clear() {
    this.session.set({});
    localStorage.removeItem(this.SESSION_KEY);
  }
}
