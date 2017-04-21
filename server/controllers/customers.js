console.log("Customers controller");
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = {
    index: function(req, res){
        Customer.find({}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success", customers: goodstuff})
            }
        });
    },
    create: function (req, res) {
        console.log("made it to the server controller for create customer");
        Customer.create(req.body, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", customer: output})
          }
      });
    },
    delete: function (req, res) {
        console.log("made it to the server controller for delete customer", req.params);
        Customer.remove({_id:req.params.id}, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", customer: output})
          }
      });
    },
}
