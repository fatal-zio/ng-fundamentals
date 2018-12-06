import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  public deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  public addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

  public userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some(voter => voter === voterName);
  }
}
