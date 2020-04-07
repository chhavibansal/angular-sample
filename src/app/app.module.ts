import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
