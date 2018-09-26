import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventService } from './shared';

@Component({
  selector: 'af-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  public isDirty = false;
  public currentEvent: IEvent;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues): void {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

}
