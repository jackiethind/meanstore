console.log("Orders controller");
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = {
    index: function(req, res){
        Order.find({}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success", orders: goodstuff})
                console.log("found orders in db");
            }
        })
    },
    create: function (req, res) {
        console.log("made it to the server controller for create order", req.body);
        Order.create(req.body, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", order: output})
            console.log('made a new order!');
          }
      });
    },
    delete: function (req, res) {
        console.log("made it to the server controller for delete order", req.params);
        Order.remove({_id:req.params.id}, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", order: output})
          }
      });
    },

}
