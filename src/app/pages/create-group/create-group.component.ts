import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Card } from 'primeng/card';
import { Select } from 'primeng/select';
import { FormErrorComponent } from '../../components/form-error/form-error.component';
import { GroupService } from '../../services/group.service';

@Component({
  imports: [Button, InputText, FloatLabel, Card, ReactiveFormsModule, Select, FormErrorComponent],
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.scss'
})
export class CreateGroupComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  messageService = inject(MessageService);
  groupService = inject(GroupService);

  createForm = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(100)]]
    //TODO : rajouter Head pour vérifier si nom existe déjà dans la DB
  })

  submit() {
    if (this.createForm.invalid) {
      return;
    }
    //TODO : Ajouter Loader
    this.groupService.create(this.createForm.value)
    .subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'La sauvegarde a été effectuée avec succès'});
        this.router.navigate(['/']);
        //TODO : ajouter loader
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'La sauvegarde a échoué'});
        //TODO : Ajouter loader
      }
    })
  }
}
