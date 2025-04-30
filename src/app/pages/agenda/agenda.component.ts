import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventService } from '../../services/event.service';
import frLocale from '@fullcalendar/core/locales/fr';
import { Dialog } from 'primeng/dialog';
import { ConfirmDialog } from 'primeng/confirmdialog';


@Component({
  selector: 'app-agenda',
  imports: [CommonModule, FullCalendarModule, Dialog, ConfirmDialog],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

  private eventService = inject(EventService);
  event: any;
  popupVisible: boolean = false;
  events! : EventInput[];

  constructor() {
    this.loadEvents();
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin],
    headerToolbar: {
      left:'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    locale: frLocale,
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    eventClick: (e) => this.eventClickHandler(e)
  }



  private loadEvents() {
    this.eventService.getAll().subscribe({
      next: (data) => {
        this.events = data.map(e => ({
          id: e.id,
          title: e.name,
          start: new Date(e.startDate),
          end: new Date(e.endDate),
          eventColor: this.getColor(e.type),
          extendedProps: {
            description: e.description,
            location: e.location,
            isConfirmed: e.isConfirmed,
            type: e.type
          }
        }));
      }
    })
  }

private getColor(type: string) {
  switch (type) {
    case 'Repetition' : return '#e89415';
    case 'Representation' : return '#e89415';
    case 'OrganisationalMeeting' : return '#e89415';
    case 'LogisticalMeeting' : return '#e89415';
    case 'PersonalEvent' : return '#e89415';
    case 'Other' : return '#e89415';
    default: return 'green'
  }
}

private eventClickHandler(e: EventClickArg) {
  this.event = {
    id: e.event.id,
    title: e.event.title,
    description: e.event.extendedProps['description'],
    startDate: e.event.start,
    endDate: e.event.end,
    type: e.event.extendedProps['type'],
    location: e.event.extendedProps['location'],
    isConfirmed: e.event.extendedProps['isConfirmed']
  };
  this.popupVisible = true;
}

onClose() {
  this.popupVisible = false;
  this.event = null;
}

}
