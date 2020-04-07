import { Routes } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './shared/create-events.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';


export const appRoutes: Routes= [
    { path: 'events/new', component:CreateEventComponent },
    {path:'events', component:EventListComponent},
    {path:'events/:id' , component:EventDetailsComponent , canActivate:[EventRouteActivator]},
    {path:'404', component:Error404Component   },
    { path: '',  redirectTo: 'events' ,pathMatch: 'full'}
]