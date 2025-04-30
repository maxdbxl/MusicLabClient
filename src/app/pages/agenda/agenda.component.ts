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
import { EventDetailsComponent } from '../../components/event-details/event-details.component';
import { DialogService } from 'primeng/dynamicdialog';
import { EventModel } from '../../models/event.model';
import { EVENT_TYPE } from '../../constants/event-type.constants';


@Component({
  selector: 'app-agenda',
  imports: [CommonModule, FullCalendarModule,  EventDetailsComponent],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

  private eventService = inject(EventService);
 private dialogService = inject(DialogService);
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
          color: this.getColor(e.eventType),
          extendedProps: {
            description: e.description,
            location: e.location,
            isConfirmed: e.isConfirmed,
            type: e.eventType
          }
        }));
      }
    })
  }



private getColor(type: string) {
  console.log(type);
  return EVENT_TYPE[type].color
}

// case 'Repetition' : return '#e89415';
// case 'Representation' : return '#e84d15';
// case '' : return '#aef26b';
// case '' : return '#42b5e3';
// case '' : return '#b842e3';
// case '' : return '#9c5beb';
// default: return 'blue'

private eventClickHandler(e: EventClickArg) {
  const event : EventModel= {
    id: e.event.id,
    name: e.event.title,
    description: e.event.extendedProps['description'],
    startDate: e.event.start?.toISOString()!,
    endDate: e.event.end?.toISOString()!,
    eventType: e.event.extendedProps['type'],
    location: e.event.extendedProps['location'],
    isConfirmed: e.event.extendedProps['isConfirmed']
  };
  this.dialogService.open(EventDetailsComponent, 
    {
      modal: true,
      dismissableMask: true,
      style: {width: '25rem', background: 'transparent', boxShadow: 'unset'},
      data: event,
      
      showHeader: false
  })

}



}
