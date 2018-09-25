import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'af-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName: string;
  private password: string;
  private mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
   this.authService.loginUser(formValues.userName,  formValues.password);
   this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
