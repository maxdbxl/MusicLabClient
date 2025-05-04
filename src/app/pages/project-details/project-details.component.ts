import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  imports: [Card, RouterModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

projectService = inject(ProjectService);
router = inject(Router);




  

}
