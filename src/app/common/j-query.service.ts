import { InjectionToken, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JQueryService {

  constructor() { }
}

export let JQ_TOKEN = new InjectionToken<Object>('jquery');
