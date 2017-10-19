//INSTRUCTIONS FOR USING THIS TEMPLATE

//create angular project
//project should be named public so as to match the call in server.js 
// ng new <my-project-name> --routing
// (done) ng new public --routing //the --routing adds a routing file, run this in the root directory of the project folder

//Generators
ng generate component my-component 
ng generate service my-service 
ng generate class my-class 

// Recap - Steps to Integrate Angular with Express
// - (done) Navigate to your Angular App and run ng build to create a 'dist' folder in your Angular App. (We will later have our Express project point to this directory as its static folder.)
// - (done) Move your Angular App inside of your Express project. 
// (At the root directory of your express project).
// - (done) Within your server.js, set your Angular's 'dist' folder as the static folder 
// app.use(express.static(path.join(__dirname, '/my-angular-app/dist')));

// Recap - Steps to Run your Full MEAN Projects
// - Navigate to your Angular App's root directory and run 
  ng build -w 
  // ('-w' will run a mini server to keep updating our 'dist' folder as we make changes to our Angular files.)
// - Navigate to our Express App's root directory and run 
  nodemon --inspect server.js
  // (This will run our Node server and restart the server anytime we make changes to our files.)



//update node, express, mongo files
// - start the mongo server
  sudo mongod //from /data folder, to start mongo daemon
- /config/mongoose.js -> update the database connecting to
- set appropriate routes
- rename/set controller file(i.e. pandas.js) and model file (panda.js)
