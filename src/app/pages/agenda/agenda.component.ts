import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-agenda',
  imports: [CommonModule, FullCalendarModule, ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

  private eventService = inject(EventService)

  calendarOptions: CalendarOptions & {schedulerLicenseKey: string} = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives'
  }

  

}
