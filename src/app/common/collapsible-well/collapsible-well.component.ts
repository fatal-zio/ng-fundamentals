import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'af-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {
  @Input() title: string;
  public visible = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visible = !this.visible;
  }

}
