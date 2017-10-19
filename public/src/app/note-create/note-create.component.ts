import { Component, OnInit } from '@angular/core';
// define the Note class
import {  Note } from '../note';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {
  // define a Note as our form object, with the type of Note
  note: Note=new Note("","");
  constructor(private _apiservice:ApiService) { 
  }

  ngOnInit() {
  }

  onSubmit(){
    // this.createQuoteEmitter.emit(this.quote);
    this.note.created_at= new Date();

    //Option 1A or Option 1B, but NOT Option 1C
    this._apiservice.createNote(this.note);

    // // Option 1C
    // this._apiservice.createNote(this.note).then(data => {
    //   console.log("inside then of promise")
    //   console.log(data)})
    // .catch(err => {
    //   console.log("in api service promise catch")
    //   console.log(err)});

    // reset our Note form object to empty
    this.note=new Note("","");

    // grab all the Notes
    this._apiservice.fetchNotes();
  }

}
