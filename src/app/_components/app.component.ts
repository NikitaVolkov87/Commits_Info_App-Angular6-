import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Get commit detail app (built with Angular 6)';

  ngOnInit() {
    sessionStorage.setItem('commits', null);
  }
}
