var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
//  content: String,
 content: { type: String, required: true, minlength: 6},
 created_at: Date
})
mongoose.model('Note', NoteSchema);