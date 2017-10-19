import { Component, OnInit, Input } from '@angular/core';
import {  Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  // we just pull our notes from the parent component. 
  // we could also call the service here as well.
  @Input()note:Note;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
