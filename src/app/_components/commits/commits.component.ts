import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Links, ErrorMessage, urlQuery } from '../../_misc/interfaces';
import { CommitsService } from '../../_services/commits.service';

@Component({
    selector: 'app-commits',
    templateUrl: './commits.component.html',
    styleUrls: [ './commits.component.css' ]
})
export class CommitsComponent implements OnInit {
    @ViewChild('input1') inputEl1:ElementRef;
    @ViewChild('input2') inputEl2:ElementRef; // Это нужно для выбора эл-тов по local variable в темплейте по имени inputEl2 (тут это нужно для наброса фокуса на эти эл-ты)

    public commits: object[];
    public links: Links[];
    public errorMessage: ErrorMessage;

    constructor(
        public commitsService: CommitsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.commitsService.getUserLS();
        this.commits = JSON.parse(sessionStorage.getItem('commits'));
        this.links = this.commitsService.links;

        console.log((<any>this.route.queryParams)._value);
        this.commitsQueryRead();
    }

    commitsQueryRead(): void {
        const urlQuery: urlQuery = (<any>this.route.queryParams)._value;
        if ( urlQuery.repoUser && urlQuery.repoName ) {
            this.commitsService.userName = urlQuery.repoUser;
            this.commitsService.userRepo = urlQuery.repoName;
            this.commitsService.saveUserLS();
            let url: string = '';
            if ( urlQuery.repoPage ) {
                url = `${this.commitsService.urlDomain}/repos/${urlQuery.repoUser}/${urlQuery.repoName}/commits?per_page=10&page=${urlQuery.repoPage}`;
            }
            this.getCommits(url);
        }
    }

    getCommits(url?: string): void {
        // this.inputEl1.nativeElement.focus();
        this.commitsService.getCommits(url).subscribe( answer => {
            this.commits = null;
            this.errorMessage = null;
            let links: string = answer.headers.get('Link');
            this.links = this.commitsService.links = this.commitsService.linkTransformer(links);
            console.log(this.links);
            this.commits = answer.body;
            sessionStorage.setItem('commits', JSON.stringify(answer.body));
            this.commitsService.page = answer.url.split('&page=')[1];
            this.syncRoute();
        }, error => {
            this.commits = null;
            this.links = null;
            this.errorMessage = {
                title: error.status,
                body: error.message
            }
        });
    }

    syncRoute(): void {
        const urlQuery: urlQuery = {
            repoUser: this.commitsService.userName,
            repoName: this.commitsService.userRepo,
            repoPage: this.commitsService.page
        };

        this.router.navigate(['/commits'], { queryParams: urlQuery });
    }

    /*setFocusOnInputUserRepo() {
      this.inputEl2.nativeElement.focus();
      // document.getElementById('user-repo').focus();
    }*/

    /*ngAfterViewInit(){
      this.inputEl1.nativeElement.focus();
      this.inputEl1.nativeElement.select();
    }*/
}
