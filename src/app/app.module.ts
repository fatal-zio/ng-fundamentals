import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent
} from './events/index';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutes } from './routes';
import { NotFoundComponent } from './errors/not-found.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent): boolean {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
