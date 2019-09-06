import { NgModule }               from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  private routeTitles = {
    commits: 'Commits title'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log( ' --- Router: ', event);
      console.log(this.route.component);
    });
  }
}
