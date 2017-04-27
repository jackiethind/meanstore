
var polls = require('./../controllers/polls.js');


module.exports = function(app){


    // Polls ROUTES
  app.get('/polls', function(req, res){
    polls.index(req, res);
  });
  app.get('/polls/:id', function(req, res){
    console.log("got to server routes with show", req);
    polls.show(req, res);
  });
  app.post('/createpoll', function(req, res){
    polls.create(req, res);
  });
  app.put('/polls/upvote1/:id', function (req, res) {
    polls.upvote1(req,res);
  });
  app.put('/polls/upvote2/:id', function (req, res) {
    polls.upvote2(req,res);
  });
  app.put('/polls/upvote3/:id', function (req, res) {
    polls.upvote3(req,res);
  });
  app.put('/polls/upvote4/:id', function (req, res) {
    polls.upvote4(req,res);
  });
  app.delete('/polls/:id', function (req,res) {
    polls.delete(req,res);
  });
}
