import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { IEvent } from '../event';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  private event: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }

}
