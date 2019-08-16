import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  inputName: string = 'enter name';
  inputPassword: string = 'enter pass';

  constructor() { }

  ngOnInit() {
  }

  inputChange(e) {
    console.log(e.target.value);
  }

  submit(e) {
    console.log(e.target.value);
  }

  getLocalVars(): void {
    console.log(`${this.inputName} - ${this.inputPassword}`);
  }
}
