import {Component, OnInit} from '@angular/core';

import { Notification } from '../../_misc/interfaces';

@Component({
    selector: 'app-notificator',
    templateUrl: './notificator.component.html',
    styleUrls: ['./notificator.component.css']
})
export class NotificatorComponent implements OnInit {
    public notification: Notification = {
        level: 0,
        text: {
            line1: ''
        }
    };
    public showing: boolean = false;
    private timerId: number;

    constructor() {}

    ngOnInit() {}

    show(line1: string, line2: string = '', level: number = 0): void {
        this.notification = {
            level: level,
            text: {
                line1: line1,
                line2: line2
            }
        };
        this.showing = true;
        if (this.timerId) clearTimeout(this.timerId);
        this.timerId = setTimeout(()=> {
            this.showing = false;
        }, 2000);
    }
}
