import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'member/register', loadComponent : () => import(
        './pages/register-member/register-member.component'
    ).then(c => c.RegisterMemberComponent)
}
];
