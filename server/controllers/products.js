console.log("Products controller");
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
    index: function(req, res){
        Product.find({}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json({message: "Success", products: goodstuff})
            }
        })
    },
    create: function (req, res) {
        console.log("made it to the server controller for create product");
        Product.create(req.body, function(err, output){
          if (err) {
            res.json({message: "Error", error: err})
          }
          else {
            res.json({message: "Success", product: output})
            console.log('made a new product!');
          }
      });
    },
    update: function(id,req, res){
        console.log("got to update function for product with the id", id);
        Product.find({ _id:id}, function (err, goodstuff) {
            if(err){
                res.json({message: "Error", error: err});
            }
            else {
                var quantity = goodstuff[0].quantity;
                quantity = quantity - req.body.amount;
                console.log("THIS IS THE NEW QUANTITY", quantity);
                Product.update({_id:id}, {$set: {quantity:quantity}}, function(err){
                    console.log("GOT TO UPDATE FUNCTION ON SERVER END");
                    if (err) {
                        res.json({message:"Theres something wrong wit this product's quantity"});
                    }
                    else {
                        res.json({message: "Success"});
                    }
                }
            )}
        });
    },

}
