import { Routes } from '@angular/router';
import { HeroesComponent } from './features/components/heroes/heroes.component';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './features/components/hero-detail/hero-detail.component';

export const routes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];
