console.log("Questions controller");
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = {
    index: function(req, res){
        Question.find({}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success", Questions: goodstuff})
            }
        })
    },
    create: function (req, res) {
        console.log("made it to the server controller for create Question");
        Question.create(req.body, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", Question: output})
            console.log('made a new Question!');
          }
      });
    },
    show: function (req, res) {
        console.log("made it to the server controller for show Question", req.params.id);
        var id =req.params.id;
        Question.find({ _id:id}, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", Question: output})
            console.log('made a new Question!');
          }
      });
    },
    update: function(id,req, res){
        console.log("got to update function for Question with the id", id);
        Question.find({ _id:id}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err});
            }
            else {
                var quantity = goodstuff[0].quantity;
                quantity = quantity - req.body.amount;
                console.log("THIS IS THE NEW QUANTITY", quantity);
                Question.update({_id:id}, {$set: {quantity:quantity}}, function(err){
                    console.log("GOT TO UPDATE FUNCTION ON SERVER END");
                    if (err) {
                        res.json({message:"Theres something wrong wit this Question's quantity"});
                    }
                    else {
                        res.json({message: "Success"});
                    }
                }
            )}
        });
    },

}
