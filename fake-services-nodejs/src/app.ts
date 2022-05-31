const { v4: uuidv4 } = require('uuid');

////////////////////////////////////
// FAKE TICKET GENERATION SERVICE
////////////////////////////////////
var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("HTTP Server running on port 3000");
});

app.get("/ticket", (req, res, next) => {
  var ticketId = uuidv4();
  console.log("\n\n [x] Create Ticket %s", ticketId);
  res.json({"ticketId" : ticketId});
});