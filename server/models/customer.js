console.log('customers model');
var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength:3},
    last_name: {type: String, required: true, minlength:3}
}, {timestamps:true});
mongoose.model('Customer', CustomerSchema);
