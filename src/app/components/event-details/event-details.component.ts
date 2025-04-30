import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EventModel } from '../../models/event.model';
import { EVENT_TYPE } from '../../constants/event-type.constants';
import { EventPipe } from '../../pipes/event.pipe';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-details',
  imports: [CardModule, EventPipe, CommonModule, DatePipe],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {

  private dialogconfig = inject(DynamicDialogConfig);



  constructor() {

  }
 
event : EventModel = this.dialogconfig.data;

}
