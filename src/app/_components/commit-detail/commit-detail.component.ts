import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorMessage } from '../../_misc/interfaces';
import { CommitsService } from '../../_services/commits.service';

@Component({
  selector: 'app-commit-detail',
  templateUrl: './commit-detail.component.html',
  styleUrls: [ './commit-detail.component.css' ]
})
export class CommitDetailComponent implements OnInit {

  public commitDetail: any;
  public commitDetailNames: string[] = [];
  public errorMessage: ErrorMessage;

  constructor(
    private route: ActivatedRoute,
    private commitsService: CommitsService
  ) {}

  ngOnInit(): void {
    this.commitsService.getUserLS();
    this.getCommitDetail();
  }

  getCommitDetail(): void {
    const urlHash: string = this.route.snapshot.paramMap.get('hash');
    this.commitsService.getCommitDetail( this.commitsService.commitHash || urlHash ).subscribe( answer => {
      this.commitDetail = answer.body;
      this.outputCommitDetail(answer.body);
    }, error => {
      this.errorMessage = {
        title: error.error.message,
        body: error.message
      }
    });
  }

  outputCommitDetail(body: object): void {
    for ( let item in body ) {
      this.commitDetailNames.push(item);
    }
  }

  parseObjects(item: string): string {
    let obj: any = this.commitDetail[item];
    return JSON.stringify(obj).replace( /},/g, "\n" ).replace( /{/g, "" );
  }
}
