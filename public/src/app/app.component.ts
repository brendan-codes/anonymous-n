import { Component } from '@angular/core';
import {  Note } from './note';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anonymous Notes';
  
  // define our notes for in the parent component
  notes: Note[];
  constructor(private _apiservice:ApiService){

    // grab all our notes from the service
    this.notes = _apiservice.notes();
  }
}
