import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { EventModel } from '../../models/event.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { EventDetailsComponent } from '../../components/event-details/event-details.component';


@Component({
  selector: 'app-project-details',
  imports: [Card, RouterLink, CommonModule, TableModule, ButtonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

projectService = inject(ProjectService);
private dialogService = inject(DialogService);
route = inject(ActivatedRoute);
router = inject(Router);

eventsToDisplay: EventModel[] = [];

constructor() {
  const projectId = Number(this.route.snapshot.params['id']);
  
  this.projectService.getTenNext(projectId).subscribe(result => this.eventsToDisplay = result);
console.log(this.eventsToDisplay);
  
}



  getEventCard(id: number, event: any) {
    this.dialogService.open(EventDetailsComponent, {
      modal: true,
      dismissableMask: true,
      style: {width: '25rem', background: 'transparent', boxShadow: 'unset'},
      data: event,
      showHeader: false
    })
  }

}
