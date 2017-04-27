console.log("poll model")
var mongoose = require("mongoose")

//Creates schema
var PollSchema = new mongoose.Schema({
  user: {type: String, required: true},
  question: {type: String, required: true, minlength: 8},
  option1: {type: String, required: true, minlength:3},
  option2: {type: String, required:true, minlength:3},
  option3: {type: String, required:true, minlength:3},
  option4: {type: String, required:true, minlength:3},
  option1vote: {type:Number},
  option2vote: {type:Number},
  option3vote: {type:Number},
  option4vote: {type:Number},
}, {timestamps:true});

//Sets our model
mongoose.model("Poll", PollSchema)
