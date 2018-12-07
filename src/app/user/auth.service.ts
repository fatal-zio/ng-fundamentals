import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string): Observable<any> {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const loginInfo = { username: userName, password: password };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  public checkAuthenticationStatus(): boolean {
    const url = '/api/currentIdentity';

    this.http.get(url).subscribe(data => {
      if (data) {
        this.currentUser = <IUser>data;
        return true;
      }
    });

    return false;
  }

  public updateCurrentUser(firstName: string, lastName: string): Observable<any> {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const url = `/api/users/${this.currentUser.id}`;
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    return this.http.put(url, this.currentUser, options);
  }
}
