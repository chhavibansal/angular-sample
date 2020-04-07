import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-list',
  // templateUrl: './event-list.component.html',
  template:`
  <div> 
    <h1> Upcoming Events </h1> 
    <hr/>
    <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail  [event]="event"></event-thumbnail>
    </div>
</div>
  </div>

`,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:any[];
  constructor(private eventService : EventService) { 

  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  

}
