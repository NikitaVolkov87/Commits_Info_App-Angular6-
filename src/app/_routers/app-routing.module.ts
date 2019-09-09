import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { CommitsComponent }       from '../_components/commits/commits.component';
import { CommitDetailComponent }  from '../_components/commit-detail/commit-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'commits', component: CommitsComponent },
  { path: 'commits/:hash', component: CommitDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  constructor() {}
}
