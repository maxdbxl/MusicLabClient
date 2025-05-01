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
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateGroupComponent } from '../create-group/create-group.component';

@Component({
  imports: [IconFieldModule, InputIconModule, FormsModule, InputTextModule, Card, ButtonModule, CreateGroupComponent],
  templateUrl: './display-groups.component.html',
  styleUrl: './display-groups.component.scss'
})
export class DisplayGroupsComponent {

groupService = inject(GroupService);
messageService = inject(MessageService);
router = inject(Router);
private dialogService = inject(DialogService);

searchValue : string = "";
groupsList: Group[] = []

  constructor() {
    this.groupService.getAll().subscribe(result => this.groupsList = result);
  }

addGroupClick() {
  this.dialogService.open(CreateGroupComponent, {
    modal: true,
    dismissableMask: true,
    style: {width: '25rem', background: 'transparent', boxShadow: 'unset'},
    showHeader: true
  })
}

submit() {
  console.log(this.searchValue);
}

}
