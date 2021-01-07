const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// creating the model from the schema
const userModel = mongoose.model("User", userSchema);

//exporting the model
module.exports = userModel;
