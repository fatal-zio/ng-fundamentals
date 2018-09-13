import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './event';

@Component({
  selector: 'af-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

}
