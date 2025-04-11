import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Calendar } from 'primeng/calendar';
import { Card } from 'primeng/card';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { MemberService } from '../../services/member.service';
import { map } from 'rxjs';
import { FormErrorComponent } from '../../components/form-error/form-error.component';

@Component({
  imports: [Button, InputText, FloatLabel, Calendar, Card, Fieldset, ReactiveFormsModule, Select, FormErrorComponent],
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
  memberService = inject(MemberService);

  // roles = [
  //   { label: 'Member', value: 0},
  //   { label: 'Admin', value: 1}
  // ]

  registerForm = this.fb.group({
    username: [null, [Validators.required, Validators.maxLength(100)]],
    email: [null, [Validators.required, Validators.maxLength(450), Validators.email], [
      (control: AbstractControl) => this.memberService.exists(control.value)
      .pipe(map(v => v ? { exist: true} : null))
    ]],
    password: [null, [Validators.required]],
    confirmPassword: [null, [Validators.required]]
  });


  submit() {
    if (this.registerForm.invalid) {
      return;
    }

    

    //Soumettre le formulaire à l'API
    //TODO : Ajouter Loader
    this.memberService.register({...this.registerForm.value})
    .subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'La sauvegarde a été effectuée avec succès'});
        this.router.navigate(['/']);
        //TODO : Ajouter Loader
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'La sauvegarde a échoué'});
        //TODO : Ajouter Loader
      }
    })
  }
}
