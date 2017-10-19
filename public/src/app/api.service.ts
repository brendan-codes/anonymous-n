import { Injectable } from '@angular/core';
import { Note } from './note';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiService {
  
  // notes are private
  private _notes:Note[]=[];
  
  constructor(private _http: Http) { 
    this.fetchNotes();
  }
  
  fetchNotes(){
    // OPTION 2 - USING A CALLBACK
    this._http.get('/notes').subscribe(data => {
      console.log("inside subscribe call back");

      var api_notes=data.json()['notes'];
      for(var i=0; i<api_notes.length; i++){
        var created_at_string = api_notes[i].created_at; 
        //returns this string format 2017-08-11T21:55:06.002Z
        
        // *note there is also a json string format that you would have to parse in order to get the date format into what we have received from the api JSON.parse(created_at_json_string);
        // console.log(created_at_string)

        var created_at = new Date(created_at_string); 
        //returns date format Fri Aug 11 2017 14:55:06 GMT-0700 (PDT)
        // console.log(created_at);

        var api_note = new Note(api_notes[i].content, created_at);
        this._notes.push(api_note);
      }
    }) 
    
    // //OPTION 1 - USING PROMISES
    // var allNotesPromise = this._http.get('/notes')
    // .map( data => data.json())
    // .toPromise();

    // return allNotesPromise;
    // // //in the promise way, you would actually return allNotesPromise  to the component that needs the data(app component), and then have the .then and .catch code below passed in as a callback over there (even more complicated/harder for students to understand)
    // allNotesPromise.then(data => {
    //   console.log(data);
    //   var api_notes=data['notes'];
    //   for(var i=0; i<api_notes.length; i++){
    //     var created_at_string = api_notes[i].created_at; //returns this string format 2017-08-11T21:55:06.002Z
    //     // *note there is also a json string format that you would have to parse in order to get the date format into what we have received from the api JSON.parse(created_at_json_string);
    //     // console.log(created_at_string)

    //     var created_at = new Date(created_at_string); //returns date format Fri Aug 11 2017 14:55:06 GMT-0700 (PDT)
    //     // console.log(created_at);

    //     var api_note = new Note(api_notes[i].content, created_at);
    //     this._notes.push(api_note);
    //   }
    // }
    // ).catch(err => {
  	// 	console.log(err);
    // })

    // return allNotesPromise;  
  }
  
  // getter is public
  notes(){
    return this._notes;
  }
  
  createNote(note:Note){
    console.log("creating note in service");
    this._notes.push(note);
    
    //OPTION 1A-USING A CALLBACK
    this._http.post('/notes', note).subscribe(data => {
        console.log(data)
      }
    );

    //OPTION 1B-USING A PROMISE
    // this._http.post('/notes', note).toPromise()
	  // .then(data => {
    //   console.log("inside then of promise")
    //   console.log(data)})
    // .catch(err => {
    //   console.log("in api service promise catch")
    //   console.log(err)});

    //OPTION 1C - USING A PROMISE THAT IS RETURNED TO THE COMPONENT
    // return this._http.post('/notes', note).toPromise()
    
  }
}
