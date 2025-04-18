import { Routes } from '@angular/router';
import { CreateGroupComponent } from './pages/create-group/create-group.component';

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
    }
];
