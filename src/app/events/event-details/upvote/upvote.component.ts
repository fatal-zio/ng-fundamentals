import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'af-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColour = val ? 'red' : 'white';
  }
  @Output() vote: EventEmitter<any> = new EventEmitter();
  public iconColour: string;

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.vote.emit(true);
  }

}
