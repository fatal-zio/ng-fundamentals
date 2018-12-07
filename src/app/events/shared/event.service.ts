import { Injectable, EventEmitter } from '@angular/core';
import { IEvent } from './event.model';
import { Observable, of } from 'rxjs';
import { ISession } from './session';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EVENTS: IEvent[];

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  public getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  public saveEvent(event: IEvent): Observable<IEvent> {
    const options = { headers: new HttpHeaders( {'Content-Type': 'application/json'}) };
    return this.http.post<IEvent>('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  public searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

}
