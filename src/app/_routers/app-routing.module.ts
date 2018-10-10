import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../_components/dashboard/dashboard.component';
import { HeroesComponent }      from '../_components/heroes/heroes.component';
import { HeroDetailComponent }  from '../_components/hero-detail/hero-detail.component';
import { CommitDetailComponent }  from '../_components/commit-detail/commit-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard/commit-detail/:hash', component: CommitDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
