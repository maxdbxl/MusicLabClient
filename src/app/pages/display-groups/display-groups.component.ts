import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { GroupService } from '../../services/group.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Group } from '../../models/group.model';
import { Card } from 'primeng/card';

@Component({
  imports: [IconFieldModule, InputIconModule, FormsModule, InputTextModule, Card],
  templateUrl: './display-groups.component.html',
  styleUrl: './display-groups.component.scss'
})
export class DisplayGroupsComponent {

groupService = inject(GroupService);
messageService = inject(MessageService);
router = inject(Router);

searchValue : string = "";
groupsList: Group[] = []

  constructor() {
    this.groupService.getAll().subscribe(result => this.groupsList = result);
  }

submit() {
  console.log(this.searchValue);
}

}
