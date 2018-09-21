import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrMessageService } from '../common/toastr-message.service';
import { IEvent } from './event';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService,
    private toastrMessageService: ToastrMessageService,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastrMessageService.success(eventName, 'Placeholder Title!');
  }

}
