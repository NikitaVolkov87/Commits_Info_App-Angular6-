import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Links, UserData, urlToAccess} from './../_misc/interfaces';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CommitsService {

    public userName: string = 'thoughtbot';
    public userRepo: string = 'guides';
    public links: Links[];
    public commitHash: string;
    public page: string;
    public urlDomain: string = 'https://api.github.com';
    public initialPath: urlToAccess;

    private token: string = '';
    private commitsUrl: string;

    constructor(
        private http: HttpClient
    ) { }

    getCommits(url?: string): Observable<any> {
        let requestUrl: string;
        let headers: any = null;
        let params = new HttpParams()
            .set('per_page', '10')
            .set('page', '1');
        if (this.token) headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        if (url) {
            requestUrl = url;
            params = null;
        } else {
            requestUrl = this.commitsUrl;
        }
        return this.http.get(requestUrl, {params, headers, observe: 'response'});
    }

    linkTransformer(links: string): Links[] {
        let inArray: string[] = links.split(", ");
        let outArray: Links[] = [];
        enum referenceArray {"first", "prev", "next", "last"};
        inArray.forEach( item => {
            let nameValue: string = item.slice(item.indexOf('"')+1, item.length-1);
            let linkValue: string = item.slice(item.indexOf("<")+1, item.indexOf(">"));
            outArray[referenceArray[nameValue]] = {name: nameValue, link: linkValue};
        });
        outArray = outArray.filter( item => item ); // removes empty array items from outArray at first and last page
        return outArray;
    }

    getCommitDetail(hash: string): Observable<any> {
        let headers: any = null;
        if (this.token) { headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`) }
        return this.http.get(`${this.commitsUrl}/${hash}`, {headers, observe: 'response'});
    }

    saveUserLS(): void {
        localStorage.setItem('user', JSON.stringify({userName: this.userName, userRepo: this.userRepo}));
        this.commitsUrl = `${this.urlDomain}/repos/${this.userName}/${this.userRepo}/commits`;
    }

    getUserLS(): void {
        const userLS: {userName: string, userRepo: string} = JSON.parse(localStorage.getItem('user'));
        if ( userLS ) {
            this.userName = userLS.userName;
            this.userRepo = userLS.userRepo;
        } else {
            this.resetUser();
        }
        this.commitsUrl = `https://api.github.com/repos/${this.userName}/${this.userRepo}/commits`;
    }

    resetUser(): void {
        this.userName = 'thoughtbot';
        this.userRepo = 'guides';
        this.saveUserLS();
    }

    getCookie(name: string): string {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    getUser(userName: string): Observable<UserData> {
        const url = `${this.urlDomain}/users/${userName}`;

        let headers = {};
        if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

        return this.http.get( url, { headers: headers, observe: 'response' } );
    }

    getRequestExample(userName: string): Observable<UserData> {
        const url = `${this.urlDomain}/users/${userName}`;

        const headers = {
            head1: 'ok',
            header2: 'ok'
        };
        if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

        const params = {
            test1: 'ok',
            test2: 'ok',
            test3: 'ok'
        };

        return this.http.get( url, {params: params, headers: headers, observe: 'response' } );
    }

    postRequestExample(userName: string): Observable<UserData> {
        const url = `${this.urlDomain}/users/${userName}`;

        const headers = {
            head1: 'ok',
            header2: 'ok'
        };

        const params = {
            test1: 'ok',
            test2: 'ok',
            test3: 'ok'
        };

        return this.http.post( url, params,{headers: headers, observe: 'response' } );
    }
}
