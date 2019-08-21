import {Component, OnInit, ViewChild} from '@angular/core';

import { CommitsService } from '../../_services/commits.service';
import { NotificatorComponent } from '../notificator/notificator.component';

import { UserData, Notification } from '../../_misc/interfaces';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css'],
    providers: [NotificatorComponent]
})
export class UserLoginComponent implements OnInit {
    private userLogin: string;
    private userPassword: string;
    private userLoggedIn: boolean;
    private userName: string;
    public loader: boolean = false;
    public notification: Notification;

    @ViewChild(NotificatorComponent) notificator: NotificatorComponent;

    constructor(
        public commitsService: CommitsService
    ) { }

    ngOnInit() {
        this.checkIfUserLoggedIn();
    }

    submitLogin(): void {
        if (this.userLogin.length) {
            this.getUser();
        }
    }

    checkIfUserLoggedIn(): void {
        if ( document.cookie.includes('userLogin') ) {
            this.userLogin = this.commitsService.getCookie('userLogin');
            this.getUser();
        } else {
            this.userLoggedIn = false;
        }
    }

    logout(): void {
        this.userLogin = '';
        this.userPassword = '';
        this.userLoggedIn = false;
        document.cookie = `userLogin=${this.userLogin}; max-age=0`;
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
        console.log(userData);
        if (userData.ok) {
            this.userLoggedIn = true;
            document.cookie = `userLogin=${this.userLogin}; max-age=3600`;
            console.log('user loaded; user name - ' + userData.body.name);
            this.userName = userData.body.name || this.userLogin;
        } else {
            console.log('user not found');
        }
    }

    messageCreate(): void {
        this.notification = {
            isWarn: false,
            text: {
                line1: 'line 1 ok',
                line2: 'line 2 also ok'
            }
        };
    }

    check(): void {
        console.log(this.notification);
    }

    check2(): void {
        this.notificator.test(true, 'test 1 passed');
    }
}
