const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    /* username: {
      type: String,
      unique: true,
      required: true
    },*/
    task: {
      type: String,
      unique: true,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  } /*
    duration: {
      type: Number,
      required: true
    },
    start: {
      type: Date
    }
  },*/,
  {
    timestamps: true
  }
);

// creating the model from the schema
const todoModel = mongoose.model("Todo", todoSchema);

// exporting the model
module.exports = todoModel;
