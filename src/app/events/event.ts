import { ILocation } from './location';

export interface IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location: ILocation;
}

export class Event implements IEvent {

  constructor (
      public id: number,
      public name: string,
      public date: string,
      public time: string,
      public price: number,
      public imageUrl: string,
      public location: ILocation) {}
}
