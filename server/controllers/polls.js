console.log("Polls controller");
var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
module.exports = {
    index: function(req, res){
        Poll.find({}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err});
            }
            else{
                res.json({message: "Success", Polls: goodstuff});
            }
        })
    },
    show: function (req, res) {
        console.log("made it to the server controller for show Poll", req.params.id);
        var id =req.params.id;
        Poll.findOne({ _id:id}, function(err, output){
          if (err) {
            res.json({message: "Error", error: err});
          }
          else {
            res.json({message: "Success", Poll: output});
            console.log('found the poll!');
          }
      });
    },
    create: function (req, res) {
        console.log("made it to the server controller for create Poll");
        Poll.create(req.body, function(err, output){
          if (err) {
              console.log(err);
            res.json({message: "Error", error: err});
          }
          else {
            res.json({message: "Success", Poll: output});
            console.log('made a new Poll!');
          }
      });
    },
    delete: function(req,res) {
        var id = req.params.id;
        console.log('made it to server delete method with id:' + id);
        Poll.remove({_id:id}, function (err) {
            if (err) {
                res.json({message:"Error Deleting", error:err});
            }
            else {
                res.json({message: "Success"});
            }
        });
    },

    upvote1: function(req, res){
        console.log("got to update function for poll option1 with the id", req.params.id);
        var id = req.params.id
        Poll.findOne({ _id:id}, function (err, poll) {
            console.log("recieved poll", poll);
            if(err){
                res.json({message: "Error upvoting option1", error: err});
            }
            else {
                poll.option1vote++;
                poll.save(function (err) {
                    if(err) {
                        res.json({message:"Error updating upvote1", error:err});
                    }
                    else {
                        res.json({message: "Success"});
                    }
                })
            }
        });
    },
    upvote2: function(req, res){
        console.log("got to update function for poll option2 with the id", req.params.id);
        var id = req.params.id
        Poll.findOne({ _id:id}, function (err, poll) {
            console.log("recieved poll", poll);
            if(err){
                res.json({message: "Error upvoting option2", error: err});
            }
            else {
                poll.option2vote++;
                poll.save(function (err) {
                    if(err) {
                        res.json({message:"Error updating upvote2", error:err});
                    }
                    else {
                        res.json({message: "Success"});
                    }
                })
            }
        });
    },
    upvote3: function(req, res){
        console.log("got to update function for poll option3 with the id", req.params.id);
        var id = req.params.id
        Poll.findOne({ _id:id}, function (err, poll) {
            console.log("recieved poll", poll);
            if(err){
                res.json({message: "Error upvoting option3", error: err});
            }
            else {
                poll.option3vote++;
                poll.save(function (err) {
                    if(err) {
                        res.json({message:"Error updating upvote3", error:err});
                    }
                    else {
                        res.json({message: "Success"});
                    }
                })
            }
        });
    },
    upvote4: function(req, res){
        console.log("got to update function for poll option4 with the id", req.params.id);
        var id = req.params.id
        Poll.findOne({ _id:id}, function (err, poll) {
            console.log("recieved poll", poll);
            if(err){
                res.json({message: "Error upvoting option4", error: err});
            }
            else {
                poll.option4vote++;
                poll.save(function (err) {
                    if(err) {
                        res.json({message:"Error updating upvote4", error:err});
                    }
                    else {
                        res.json({message: "Success"});
                    }
                })
            }
        });
    },

}
