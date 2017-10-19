var mongoose = require('mongoose');
var Note = mongoose.model('Note')

module.exports = {
  index: function(req, res) {
    Note.find({}, function(err, notes) {
      res.json({'notes': notes});
    })
  },

  create: function(req, res) {
    console.log("express create method");
    console.log(req.body);
    var note = new Note({
      content: req.body.content, 
      // content: 5, //error
      created_at: new Date()
    });
    note.save(function(err) {
      if(err) {
        console.log('something went wrong');
        let errors = [];
        for(var key in err.errors){
          errors.push(err.errors[key].message);
        }
        res.json({message: "Error", error: errors});
      } else { 
        res.json({message: "Success", note: note});
      }
    })
  }
}