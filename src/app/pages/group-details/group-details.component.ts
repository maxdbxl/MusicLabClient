import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GroupService } from '../../services/group.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Group } from '../../models/group.model';
import { TableModule } from 'primeng/table';

@Component({
  imports: [RouterLink, CommonModule, CardModule, ButtonModule, TableModule ],
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss'
})
export class GroupDetailsComponent {

  groupService = inject(GroupService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  groupToDisplay : Group | null = null!;
  

  constructor() {
    const groupId = Number(this.route.snapshot.params['id']);
    this.groupService.FindById(groupId).subscribe(result => this.groupToDisplay = result);
    console.log(this.groupToDisplay);
  }

  
}
