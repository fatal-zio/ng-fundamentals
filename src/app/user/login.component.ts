import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'af-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  login(formValues) {
   console.log(formValues);
  }

}
