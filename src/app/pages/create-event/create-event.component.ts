import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EventService } from '../../services/event.service';
import { SessionService } from '../../services/session.service';
import { CustomValidators } from '../../validators/custom.validators';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { Card } from 'primeng/card';
import { Fieldset } from 'primeng/fieldset';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { EVENT_TYPE } from '../../constants/event-type.constants';
import { EVENT_TYPE_OPTIONS } from '../../constants/event-type-options.constant';
import { MultiSelectModule } from 'primeng/multiselect';
import { MemberService } from '../../services/member.service';
import { FormErrorComponent } from '../../components/form-error/form-error.component';

@Component({
  selector: 'app-create-event',
  imports: [Button, InputText, FloatLabel, Card, Fieldset, ReactiveFormsModule, Select, DatePicker, TextareaModule,MultiSelectModule, FormErrorComponent],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {

  fb = inject(FormBuilder);
  router = inject(Router);
  messageService = inject(MessageService);
  eventService = inject(EventService);
  memberService = inject(MemberService);
  sessionService = inject(SessionService);

  eventTypeOptions = EVENT_TYPE_OPTIONS;
  participants : any[] = [];

constructor() {
  this.createMeetingForm.controls['startTime'].valueChanges.subscribe(v => {
    this.createMeetingForm.controls['endTime'].updateValueAndValidity()
  });

  this.memberService.getAll().subscribe(result => this.participants = result);
  console.log(this.participants);
}


  startTime = this.fb.control(null, {validators: [Validators.required]})

createMeetingForm = this.fb.group({
  name: [null, [Validators.required, Validators.maxLength(350)]],
  description: [null, [Validators.required, Validators.maxLength(1500)]],
  location: [null, [Validators.required]],
  startTime: this.startTime,
  endTime: [null, [Validators.required, CustomValidators.startDateBeforeEndDateValidator]],
  eventType: [null, [Validators.required]],
  membersList: [null, [Validators.required]]
  });

  submit() {
    if (this.createMeetingForm.invalid) {
      return;
    }

    this.eventService.create(this.createMeetingForm.value)
    .subscribe({
      next: () => {
        this.messageService.add({severity: 'success', summary: 'La sauvegarde a été effectuée avec succès'});
        this.router.navigate(['/']);
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'La sauvegarde a échoué'});
      }
    })
  }


}

