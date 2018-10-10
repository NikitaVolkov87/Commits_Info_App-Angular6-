import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../_services/hero.service';

@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html',
  styleUrls: [ './commit-detail.component.css' ]
})
export class CommitDetailComponent implements OnInit {

  public commitDetail: any;
  public commitDetailNames: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService.getUserLS();
    this.getCommitDetail();
  }

  getCommitDetail(): void {
    const urlHash: string = this.route.snapshot.paramMap.get('hash');
    this.heroService.getCommitDetail( this.heroService.commitHash || urlHash ).subscribe( answer => {
      this.commitDetail = answer.body;
      this.outputCommitDetail(answer.body);
    }, error => {
      console.log("error ->", error);
    });
  }

  outputCommitDetail(body: object): void {
    for ( let item in body ) {
      this.commitDetailNames.push(item);
    }
  }

  goBack(): void {
    this.location.back();
  }

  parseObjects(item: string): string {
    let obj: any = this.commitDetail[item];
    return JSON.stringify(obj).replace( /},/g, "\n" ).replace( /{/g, "" );
  }
}
