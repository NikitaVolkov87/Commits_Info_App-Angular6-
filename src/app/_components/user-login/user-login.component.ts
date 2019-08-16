import { Component, OnInit } from '@angular/core';

import { CommitsService } from '../../_services/commits.service';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    private userName: string = '';
    private userPassword: string;
    private userLoggedIn: boolean;

    constructor(
        public commitsService: CommitsService,
    ) { }

    ngOnInit() {
        this.checkIfUserLoggedIn();
    }

    submitLogin(): void {
        if (this.userName.length) {
            this.getUserInfo();
            this.userLoggedIn = true;
            document.cookie = `userName=${this.userName}; max-age=3600`;
        }
    }

    checkIfUserLoggedIn(): void {
        if ( document.cookie.includes('userName') ) {
            this.userName = this.commitsService.getCookie('userName');
            this.getUserInfo();
            this.userLoggedIn = true;
        } else {
            this.userLoggedIn = false;
        }
    }

    logout(): void {
        this.userName = '';
        this.userPassword = '';
        this.userLoggedIn = false;
        document.cookie = `userName=${this.userName}; max-age=0`;
    }

    getUserInfo(): void {
        this.commitsService.getUser(this.userName).subscribe(answer => {
            console.log( answer );
        },error => {
            console.log( error );
        });
    }
}
