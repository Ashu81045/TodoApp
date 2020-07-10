const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TodoSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  assignee: {
    type: String, 
    required: true
  },
  status: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    //default: Date.now
  }
});
module.exports = Todo = mongoose.model("todos", TodoSchema);