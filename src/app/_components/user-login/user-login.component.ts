import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CommitsService } from '../../_services/commits.service';
import { NotificatorComponent } from '../notificator/notificator.component';

import { urlQuery, urlToAccess, UserData } from '../../_misc/interfaces';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css'],
    providers: [NotificatorComponent]
})
export class UserLoginComponent implements OnInit {
    private userLogin: string = '';
    private userPassword: string;
    public userLoggedIn: boolean;
    private userName: string;
    public loader: boolean = false;

    @ViewChild(NotificatorComponent) notificator: NotificatorComponent;

    constructor(
        public commitsService: CommitsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.checkIfUserLoggedIn();
    }

    submitLogin(): void {
        if (this.userLogin.length) {
            this.getUser();
        } else {
            this.notificator.show('Enter login, please');
        }
    }

    checkIfUserLoggedIn(): void {
        if ( document.cookie.includes('userLogin') ) {
            this.userLogin = this.commitsService.getCookie('userLogin');
            this.getUser();
        } else {
            this.userLoggedIn = false;
            if ( window.location.pathname.length > 1 ) {
                this.saveUrlToAccessAfterLogin();
            }
            this.router.navigate(['/']);
        }
    }

    saveUrlToAccessAfterLogin(): void {
        this.commitsService.initialPath = {
            urlPathname: window.location.pathname,
            urlQuery: window.location.search
        };
        console.log(this.commitsService.initialPath);
    }

    clearUrlToAccessAfterLogin(): void {
        this.commitsService.initialPath = {
            urlPathname: null,
            urlQuery: null
        };
    }

    logout(): void {
        this.userLogin = '';
        this.userPassword = '';
        this.userLoggedIn = false;
        document.cookie = `userLogin=${this.userLogin}; max-age=0`;
        // this.clearUrlToAccessAfterLogin();
        this.router.navigate(['/']);
    }

    getUser(): void {
        this.loader = true;
        this.commitsService.getUser(this.userLogin).subscribe(answer => {
            this.getUserGotData( answer );
        },error => {
            this.getUserGotData( error );
        });
    }

    getUserGotData(userData: UserData): void {
        this.loader = false;
        if (userData.ok) {
            this.userLoggedIn = true;
            document.cookie = `userLogin=${this.userLogin}; max-age=3600; path=/`;
            this.userName = userData.body.name || this.userLogin;
            this.redirectToQuariedUrl();
        } else {
            this.notificator.show('User login error', userData.statusText, -1);
        }
    }

    redirectToQuariedUrl(): void {
        const urlQuery: urlQuery = (<any>this.route.queryParams)._value;
        console.log(urlQuery);
        if ( this.commitsService.initialPath && this.commitsService.initialPath.urlPathname ) {
            this.router.navigateByUrl(this.commitsService.initialPath.urlPathname + this.commitsService.initialPath.urlQuery );
            console.log('redir 1');
        // } else if ( window.location.pathname.length > 1 ) {
        //     this.router.navigateByUrl( window.location.pathname, { queryParams: urlQuery });
        //     console.log('redir 2');
        } else {
            this.router.navigate(['/commits'], { queryParams: urlQuery });
            console.log('redir 3');
        }
    }

    check1(): void {
        this.notificator.show('test 1 passed', null, 1);
    }

    check2(): void {
        this.notificator.show('test 2 passed', 'test 3 passed', -1);
    }
}
