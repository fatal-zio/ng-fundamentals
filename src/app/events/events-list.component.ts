import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrMessageService } from '../common/toastr-message.service';
import { IEvent } from './event';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private toastrMessageService: ToastrMessageService) {  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastrMessageService.success(eventName, 'Placeholder Title!');
  }

}
