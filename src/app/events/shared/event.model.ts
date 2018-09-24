import { ILocation } from './location';
import { ISession } from './session';

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  sessions: ISession[];
  location?: ILocation;
  onlineUrl?: string;
}

export class Event implements IEvent {

  constructor (
      public id: number,
      public name: string,
      public date: Date,
      public time: string,
      public price: number,
      public imageUrl: string,
      public sessions: ISession[],
      public location?: ILocation,
      public onlineUrl?: string) {}
}
