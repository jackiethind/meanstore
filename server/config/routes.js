
var questions = require('./../controllers/questions.js');


module.exports = function(app){


    // questionS ROUTES
  app.get('/questions', function(req, res){
    questions.index(req, res);
  });
  app.get('/questions/:id', function(req, res){
    console.log("got to server routes with show", req);
    questions.show(req, res);
  });
  app.post('/createquestion', function(req, res){
    questions.create(req, res);
  });
  app.put('/updatequestion/:id', function (req, res) {
      console.log(req.params.id);
      var id = req.params.id;
    questions.update(id,req,res);
  });

}
