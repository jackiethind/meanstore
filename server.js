var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('./server/config/mongoose.js'),
  app = express();

app.use(bodyParser.json());
var routes = require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));


app.listen(8000, function(){
  console.log("Listening on port 8000");
})
