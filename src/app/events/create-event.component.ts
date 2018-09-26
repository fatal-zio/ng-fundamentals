import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared';

@Component({
  selector: 'af-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  public isDirty = false;
  public currentEvent: IEvent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues): boolean {
    console.log(formValues);
    return true;
  }

}
