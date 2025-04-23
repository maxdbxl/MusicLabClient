import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { SessionService } from '../../services/session.service';
import { environment } from '../../../environments/environment';


@Component({
  imports: [Button, InputText, FloatLabel, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  httpClient = inject(HttpClient);
  messageService = inject(MessageService);
  router = inject(Router);
  sessionService = inject(SessionService);

  fg = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]]
  })

login() {
  if(this.fg.invalid) {
    return;
  }
  this.httpClient.post<{token: string}>(environment.baseApiUrl +'/login', this.fg.value).subscribe({
    next: ({token}) => {
      //Sauve le token dans le local storage
      this.sessionService.start(token);
      this.router.navigate(['']);
    },
    error: () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur de connexion'
      })
    }
  })
}

}
