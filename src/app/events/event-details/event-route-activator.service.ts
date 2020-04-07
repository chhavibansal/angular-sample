import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';

@Injectable({providedIn: 'root'})
export class EventRouteActivator implements CanActivate {
    constructor( private eventService : EventService, private route : Router ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        // return true;
        if(!eventExists ){
            this.route.navigate(['/404'])
            
        }
        return eventExists;
    }
}