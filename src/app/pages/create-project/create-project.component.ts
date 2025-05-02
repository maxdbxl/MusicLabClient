import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { Calendar } from 'primeng/calendar';
import { Card } from 'primeng/card';
import { Fieldset } from 'primeng/fieldset';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { FormErrorComponent } from '../../components/form-error/form-error.component';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProjectService } from '../../services/project.service';
import { Select, SelectItem } from 'primeng/select';
import { CustomValidators } from '../../validators/custom.validators';
import { DatePicker } from 'primeng/datepicker';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/group.model';
import { SessionService } from '../../services/session.service';

@Component({
  imports: [Button, InputText, FloatLabel, Calendar, Card, Fieldset, ReactiveFormsModule, FormErrorComponent, PasswordModule, Select, DatePicker],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

fb = inject(FormBuilder);
router = inject(Router);
messageService = inject(MessageService);
projectService = inject(ProjectService);
groupService = inject(GroupService);
sessionService = inject(SessionService);

companies : any[] = [];
constructor() {
  this.createProjectForm.controls['startDate'].valueChanges.subscribe(v => {
    this.createProjectForm.controls['endDate'].updateValueAndValidity()
  });
  
   this.groupService.getAllGroupsForMemberId(this.sessionService.session().id).subscribe(result => this.companies = result);
   
}

startDate = this.fb.control(null, {validators: []});

createProjectForm = this.fb.group({
  name: [null, [Validators.required, Validators.maxLength(200)]],
  companies: [null, [Validators.required]],
  startDate: this.startDate,
  endDate: [null, [Validators.required, CustomValidators.startDateBeforeEndDateValidator(this.startDate)]]
});

submit() {
  if (this.createProjectForm.invalid) {
    return;
  }
  //TODO : ajouter Loader
  
  this.projectService.create({...this.createProjectForm.value, companies: [this.createProjectForm.value.companies]})
  .subscribe(
    {
      next: () => {
        this.messageService.add({severity: 'success', summary: 'La sauvegarde a été effectuée avec succès'});
        this.router.navigate(['/']);
        //TODO : ajouter loader
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'La sauvegarde a échoué'});
        //TODO : Ajouter loader
      }
    }
  )
}
}
