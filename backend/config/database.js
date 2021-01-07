const mongoose = require("mongoose");
const mongourl =
  "mongodb+srv://saloni_02:aSepeN8AuszRHax@cluster0.brbhr.mongodb.net/todolist?retryWrites=true&w=majority";

var mongoServer = async () => {
  try {
    await mongoose.connect(mongourl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = mongoServer;
