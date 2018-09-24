import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, IEvent } from './shared/index';
import { ToastrMessageService } from '../common/toastr-message.service';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
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
