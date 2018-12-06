import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'af-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchTerm = '';
  public foundSessions: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  public searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => { this.foundSessions = sessions; }
    );
  }

}
