import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrMessageService } from '../common/toastr-message.service';

@Component({
  selector: 'af-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(private authService: AuthService, private router: Router,
    private toasterMessageService: ToastrMessageService) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName,
        Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  public cancel(): void {
    this.router.navigate(['events']);
  }

  public saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toasterMessageService.success('Profile Saved');
      });
    }
  }

  public validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  public validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  public logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
