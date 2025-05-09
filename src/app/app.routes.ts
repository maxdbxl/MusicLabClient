import { Routes, CanActivateFn } from '@angular/router';
import { CreateGroupComponent } from './pages/create-group/create-group.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { authGuard } from './guards/auth.guard';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {path:'member/register', loadComponent : () => import(
        './pages/register-member/register-member.component'
    ).then(c => c.RegisterMemberComponent)
    },
    {path: 'member/members', loadComponent: () => import('./pages/display-members/display-members.component').then(c => c.DisplayMembersComponent),
        title: 'Membres'
    },
    {path:'group/create', loadComponent : () => import(
        './pages/create-group/create-group.component'
    ).then(c => c.CreateGroupComponent)},
    {path: 'groups', loadComponent : () => 
        import('./pages/display-groups/display-groups.component').then(c => c.DisplayGroupsComponent), canActivate: [authGuard]},
    {path: 'group/:id', loadComponent: () =>
        import('./pages/group-details/group-details.component').then(c => c.GroupDetailsComponent),
        title: 'Informations Groupe'
    },
    {path: 'projects', loadComponent : () => import ('./pages/display-projects/display-projects.component').then(c => c.DisplayProjectsComponent)},
    {path: 'project/create', loadComponent : () => import(
        './pages/create-project/create-project.component'
    ).then(c => c.CreateProjectComponent)
    },
    {path: 'login', loadComponent : () => import ('./pages/login/login.component')
        .then(c => c.LoginComponent)
    },
    {path: 'agenda', loadComponent : () => import ('./pages/agenda/agenda.component')
        .then(c => c.AgendaComponent)
    },
    {path: 'event/create', loadComponent: () => import ('./pages/create-event/create-event.component')
        .then(c => c.CreateEventComponent)
    },
    {path: 'project/:id', loadComponent: () => import ('./pages/project-details/project-details.component').then(c => c.ProjectDetailsComponent)
    },
    {path: 'event/:id/confirm', loadComponent: () => import ('./pages/event-participation/event-participation.component').then(c => c.EventParticipationComponent)},
    {path: '', loadComponent : () => import ('./pages/agenda/agenda.component')
        .then(c => c.AgendaComponent)
    },
    
];
