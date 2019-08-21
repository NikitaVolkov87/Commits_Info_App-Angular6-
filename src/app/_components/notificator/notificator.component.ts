import {Component, Input, OnInit} from '@angular/core';

import { Notification } from '../../_misc/interfaces';

@Component({
    selector: 'app-notificator',
    templateUrl: './notificator.component.html',
    styleUrls: ['./notificator.component.css']
})
export class NotificatorComponent implements OnInit {
    @Input() public notification: Notification;
    public show: boolean = false;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(): void {
        this.show = true;
        setTimeout(()=> {
            // this.notification.text.line1 = null;
            this.show = false;
        }, 2000);
    }

    test(isWarn = false, line1, line2 = ''): void {
        console.log('test ok');
        this.notification = {
            isWarn: isWarn,
            text: {
                line1: line1,
                line2: line2
            }
        };
    }
}
