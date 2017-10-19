var notes = require('../controllers/notes.js');
module.exports = function(app) {

  app.get('/notes', (req, res, next)=>{
    console.log("express get route is working")
    notes.index(req, res)
  });

  app.post('/notes', (req, res, next)=>{
    console.log("node route create");
    console.log(req.body)
    notes.create(req, res);
  });
} 