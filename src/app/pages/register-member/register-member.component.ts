import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Calendar } from 'primeng/calendar';
import { Card } from 'primeng/card';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { MessageService } from 'primeng/api';

@Component({
  imports: [Button, InputText, FloatLabel, Calendar, Card, Fieldset, ReactiveFormsModule, Select],
  templateUrl: './register-member.component.html',
  styleUrl: './register-member.component.scss'
})
export class RegisterMemberComponent {
  //Créer le formulaire
  fb = inject(FormBuilder);
  // Redirection
  router = inject(Router);
  // Toast
  messageService = inject(MessageService);
  //Requêtes vers l'API

  roles = [
    { label: 'Member', value: 0},
    { label: 'Admin', value: 1}
  ]

  registerForm = this.fb.group({
    username: [null, [Validators.required, Validators.maxLength(100)]],
    email: [null, [Validators.required, Validators.maxLength(450), Validators.email]],
    password: [null, [Validators.required]],
    role: [null, [Validators.required]]
  })
}
