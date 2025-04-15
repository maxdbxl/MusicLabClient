import { Routes } from '@angular/router';

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
    ).then(c => c.CreateGroupComponent)}
];
