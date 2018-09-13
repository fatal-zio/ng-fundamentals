export interface ILocation {
  address: string;
  city: string;
  country: string;
}

export class Location implements ILocation {

  constructor (
      public address: string,
      public city: string,
      public country: string) {}

}
