import { Routes } from '@angular/router';
import { CreateGroupComponent } from './pages/create-group/create-group.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

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
        import('./pages/display-groups/display-groups.component').then(c => c.DisplayGroupsComponent)},
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
    }
];
