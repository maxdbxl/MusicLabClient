import { Component, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { SessionService } from '../../services/session.service';
import { InvitationModel } from '../../models/invitation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-event-participation',
  imports: [Card, ButtonModule, TableModule, ToolbarModule, IconField, InputIcon, TagModule, CommonModule, SplitButtonModule ],
  templateUrl: './event-participation.component.html',
  styleUrl: './event-participation.component.scss'
})
export class EventParticipationComponent {

eventService = inject(EventService);
sessionService = inject(SessionService);
route = inject(ActivatedRoute);
router = inject(Router);

loggedMemberId = this.sessionService.session().id;



invitationsToDisplay: InvitationModel[] = [];

  constructor() {
    const meetingId = Number(this.route.snapshot.params['id']);
    this.eventService.getInvitationsConfirm(meetingId).subscribe(result => this.invitationsToDisplay = result);
    
  }

  reloadPage(){
    window.location.reload()
  }

  confirmAvailability(memberId: number, meetingId: number, availability: string) {
    this.eventService.changeAvailability(memberId, meetingId, availability).subscribe(() => this.reloadPage());
    
  }
  confirmUnavailability(memberId: number, meetingId: number, availability: string) {
    this.eventService.changeAvailability(memberId, meetingId, availability).subscribe(() => this.reloadPage());
    
  }

}
