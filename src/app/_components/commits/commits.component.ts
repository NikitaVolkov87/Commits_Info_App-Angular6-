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
        // this.commitsService.getUserLS();
        // this.commits = JSON.parse(sessionStorage.getItem('commits'));
        this.links = this.commitsService.links;

        const url = this.urlQueryRead(['repoUser', 'repoName', 'repoPage']);
        if (url) this.getCommits(url);
        this.handlePageTitle();
    }

    ngOnDestroy() {
        this.commitsService.links = null;
    }

    urlQueryRead( queryItems?: string[] ): string {
        const urlQuery: object = this.commitsService.getUrlQuery();
        if ( urlQuery[queryItems[0]] && urlQuery[queryItems[1]] ) {
            for (const item of queryItems) {
                if (urlQuery[item]) {
                    this.commitsService[item] = urlQuery[item];
                }
            }
            this.commitsService.saveUserLS();
            const url: string = `${this.commitsService.urlDomain}/repos/${this.commitsService.repoUser}/${this.commitsService.repoName}/commits?per_page=10&page=${this.commitsService.repoPage || 1}`;
            return url;
        }
    }

    getCommits(url?: string): void {
        // this.inputEl1.nativeElement.focus();
        this.commitsService.repoPage = url ? url.split('&page=')[1] : '1';
        this.syncRoute();
        this.commitsService.getCommits(url).subscribe( answer => {
            this.commits = null;
            this.errorMessage = null;
            let links: string = answer.headers.get('Link');
            this.links = this.commitsService.links = this.commitsService.linkTransformer(links);
            this.commits = answer.body;
            sessionStorage.setItem('commits', JSON.stringify(answer.body));
            this.handlePageTitle();
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
            repoUser: this.commitsService.repoUser,
            repoName: this.commitsService.repoName,
            repoPage: this.commitsService.repoPage
        };
        this.router.navigate(['/commits'], { queryParams: urlQuery });
    }

    handlePageTitle(): void {
        const titles = ['Enter user & repository', 'Commits browser'];
        if ( this.commitsService.getUrlQuery()['repoUser'] ) {
            this.commitsService.setTitle(titles[1]);
        } else {
            this.commitsService.setTitle(titles[0]);
        }
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
