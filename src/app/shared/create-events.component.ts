import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-events',
    // templateUrl: 'createEvents.component.html'
    template:`
        <h1>New Elements</h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create event form goes here]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">
            Save
        </button>
        <button class="button" class="btn btn-default" (click)="cancel()">
            Reset
        </button>
    </div>
    `,
})

export class CreateEventComponent implements OnInit {
    constructor(private router : Router) { }

    cancel(){
        this.router.navigate(['/events'])
    }
    ngOnInit() { }
}