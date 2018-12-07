import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventService, IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  @Input() event: IEvent;
  public addMode: boolean;
  public filterBy = 'all';
  public sortBy = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(result => {
      this.event = this.route.snapshot.data['event'];
      this.addMode = false;
    });
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(flag: boolean) {
    if (flag) {
      this.addMode = false;
    } else {
      this.addMode = true;
    }
  }

}
