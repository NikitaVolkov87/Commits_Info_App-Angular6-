import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Get commit detail app';
  subtitle: string = "built with Angular 6 and it's fully adaptive";

  ngOnInit() {
    sessionStorage.setItem('commits', null);
  }
}
