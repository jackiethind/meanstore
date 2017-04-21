console.log('products model');
var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3},
    url: {type: String, required: true, minlength:20},
    description: {type: String, required: true, minlength:5},
    quantity: {type: Number, required: true}
    }, {timestamps:true})
mongoose.model('Product', ProductSchema);
