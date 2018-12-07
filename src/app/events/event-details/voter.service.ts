import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  public deleteVoter(eventId: number, session: ISession, voterName: string) {
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = { headers: new HttpHeaders({'Content-Type': '/applicaion/json'})};

    session.voters = session.voters.filter(voter => voter !== voterName);
    this.http.delete(url)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  public addVoter(eventId: number, session: ISession, voterName: string) {
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = { headers: new HttpHeaders({'Content-Type': '/applicaion/json'})};

    session.voters.push(voterName);

    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  public userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
