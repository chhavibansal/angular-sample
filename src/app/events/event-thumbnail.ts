import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events' , event.id]" class="well hoverwell thumbnail" >
        <h2>{{event.name}}</h2>
        <div> Date: {{event.date}}</div>
        <div [style.color]="event?.time === '9:00 am' ? '#bbb' : '#333'" 
            [ngSwitch]="event?.time">Time: {{event.time}} 
                
            <span *ngSwitchCase="'9:00 am'">Late Start</span>
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchDefault>Normal Start</span>

        </div>
        <div *ngIf= "event?.location"> Venue : {{event.location.address}}, {{event.location.city}},{{event.location.country}}</div>
        <div *ngIf="event?.onlineUrl">
        Online Url : {{event.onlineUrl}} 
        </div>
    </div>
    `,
    styles:[`
    .thumbnail {min-height:190px},
    .well div { background-color: #bbb;},
    `]
    
})

export class EventThumbnailComponent{
    @Input() event : any ;
    // @Output() eventClick = new EventEmitter();

    // onClick():void{
    //     console.log('clicked')
    //     // this.eventClick.emit(this.event.name);
    // }
}