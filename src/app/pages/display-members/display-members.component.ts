import { Component, inject } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Member } from '../../models/member.model';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';

@Component({
  imports: [DataViewModule, CommonModule, TableModule, Button],
  templateUrl: './display-members.component.html',
  styleUrl: './display-members.component.scss'
})
export class DisplayMembersComponent {

memberService = inject(MemberService);
messageService = inject(MessageService);
router = inject(Router);

membersList: Member[] = []

  constructor() {
    this.memberService.getAll().subscribe(result => this.membersList = result);
  }

  //TODO : méthode selectMember pour rediriger (navigate) vers page perso ? Pas nécessaire dans un premier temps
}
