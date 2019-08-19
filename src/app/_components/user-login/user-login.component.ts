import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CommitsService } from '../../_services/commits.service';
import { LoaderComponent } from '../loader/loader.component';

@Component({
    providers: [LoaderComponent],
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
        public loader: LoaderComponent
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
            this.userLoggedIn = true;
        },error => {
            console.warn( error );
        }, () => {
            console.log('Observer got a complete notification');
        });
    }

    t1(): void {
        const greetingPoster = new Promise((resolve, reject) => {
            console.log('Inside Promise (proof of being eager)');
            resolve('Welcome! Nice to meet you.');
        });

        console.log('Before calling then on Promise');

        greetingPoster.then(res => console.log(`Greeting from promise: ${res}`));

        console.log(this.loader.loaderActive);
        this.loader.loaderOn();
        console.log(this.loader.loaderActive);
    }

    t2(): void {
        const greetingLady$ = new Observable(observer => {
            console.log('Inside Observable (proof of being lazy)');
            observer.next('Hello! I am glad to get to know you.');
            observer.complete();
        });

        console.log('Before calling subscribe on Observable');

        greetingLady$.subscribe({
            next: console.log,
            complete: () => console.log('End of conversation with preety lady')
        });

        console.log(this.loader.loaderActive);
        this.loader.loaderOff();
        console.log(this.loader.loaderActive);
    }

    t3(): void {
        const greetingLady$ = new Observable(observer => {
            observer.next('Hello! I am glad to get to know you.');
            observer.complete();
        });

        console.log('Before calling subscribe on Observable');

        greetingLady$.subscribe({
            next: console.log,
            complete: () => console.log('End of conversation with preety lady')
        });

        console.log('After calling subscribe on Observable (proof of being able to execute sync)');
    }

    t4(): void {
        const tiredGreetingLady$ = new Observable(observer => {
            setTimeout(() => {
                observer.next('Hello! I am glad to get to know you.');
                observer.complete();
            }, 2000);
        });

        console.log('Before calling subscribe on Observable');

        tiredGreetingLady$.subscribe({
            next: console.log,
            complete: () => console.log('End of conversation with tired preety lady')
        });

        console.log('After calling subscribe on Observable (proof of being able to execute async)');
    }

    t5(): void {
        const notifications$ = new Observable(observer => {
            const interval = setInterval(() => {
                observer.next('New notification');
            }, 1000);
            console.log('inner func');
            return () => {
                clearInterval(interval);
                console.log('clear func');
            }
        });

        const subscription = notifications$.subscribe(console.log, error => console.log(error), () => console.log('complete'));

        setTimeout(() => subscription.unsubscribe(), 16000);
    }

    t6(): void {
        const notifications$ = new Observable(observer => {
            const interval = setInterval(() => {
                observer.next('New notification');
            }, 2000);

            return () => clearInterval(interval);
        });

        const enhancedNotifications$ = notifications$.pipe(
            map(message => `${message} ${new Date()}`)
        );

        const subscription = enhancedNotifications$.subscribe(console.log);

        setTimeout(() => subscription.unsubscribe(), 7000);
    }
}
