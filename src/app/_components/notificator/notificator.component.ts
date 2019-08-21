import {Component, OnInit} from '@angular/core';

import { Notification } from '../../_misc/interfaces';

@Component({
    selector: 'app-notificator',
    templateUrl: './notificator.component.html',
    styleUrls: ['./notificator.component.css']
})
export class NotificatorComponent implements OnInit {
    public notification: Notification = {
        isWarn: false,
        text: {
            line1: ''
        }
    };
    public showing: boolean = false;
    private timerId: number;

    constructor() {}

    ngOnInit() {}

    show(isWarn: boolean, line1: string, line2: string = ''): void {
        console.log('test ok');
        this.notification = {
            isWarn: isWarn,
            text: {
                line1: line1,
                line2: line2
            }
        };
        this.showing = true;
        if (this.timerId) clearTimeout(this.timerId);
        this.timerId = setTimeout(()=> {
            // this.notification.text.line1 = null;
            this.showing = false;
        }, 2000);
    }
}
