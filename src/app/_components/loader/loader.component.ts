import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    public loaderActive: boolean = true;

    constructor() { }

    ngOnInit() {
    }

    public loaderOn(): void {
        console.log(this.loaderActive);
        this.loaderActive = true;
        console.log(this.loaderActive);
    }

    public loaderOff(): void {
        console.log(this.loaderActive);
        this.loaderActive = false;
        console.log(this.loaderActive);
    }
}
