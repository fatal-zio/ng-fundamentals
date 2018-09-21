import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { NotFoundComponent } from './errors/not-found.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
