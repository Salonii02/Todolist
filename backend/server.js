const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const { config } = require("process");
// Import the library:
var cors = require("cors");

// Declaring Mongo Sevrer
const mongoServer = require("./config/database");
// Database Server
mongoServer();

// Initialising Body-Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Then use it before your routes are set up:
app.use(cors());

//Getting Routers
const TodosRouter = require("./routes/todoroute");
app.use("/todos", TodosRouter);

// Run the server
app.listen(PORT, () => {
  // listening on port 5000
  console.log(`listening on port ${PORT}`); // print this when the server starts
});
