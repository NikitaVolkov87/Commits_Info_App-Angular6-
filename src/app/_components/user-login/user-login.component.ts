import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputChange(e) {
    console.log(e.target.value);
  }

  submit(e) {
    console.log(e.target.value);
  }
}
