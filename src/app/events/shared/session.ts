export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}

export class Session implements ISession {
  constructor (
    public id: number,
    public name: string,
    public presenter: string,
    public duration: number,
    public level: string,
    public abstract: string,
    public voters: string[]) {}

}
