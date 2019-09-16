import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
        public router: Router,
        private commitsService: CommitsService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getRepo();
        this.getCommitDetail();
        this.commitsService.setTitle("Commit's details");
        console.log(this.router);
    }

    getRepo(): void {
        this.commitsService.getUserLS(this.router.currentUrlTree.queryParams || null);
        this.route.queryParamMap.subscribe(params => {
            console.log('p => ');
            console.log(params);
        });
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

    goBack(): void {
        this.location.back();
    }
}
