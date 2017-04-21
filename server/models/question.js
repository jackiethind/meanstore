console.log("question model")
var mongoose = require("mongoose")

//Creates schema
var QuestionSchema = new mongoose.Schema({
  user: {type: String, required: true, minlength: 3},
  question: {type: String, required: true, minlength: 10},
  description: {type: String},
  answers: [{type: String, minlength:5}],
  // answerDetail: {type: String, minlength:5},
  answerCount: {type:Number},
  likes: {type:Number}
}, {timestamps:true});

//Sets our model
mongoose.model("Question", QuestionSchema)
