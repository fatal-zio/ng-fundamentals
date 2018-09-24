import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found.component';

import {
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  EventsListComponent,
  EventDetailsComponent
} from './events/index';

export const AppRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
