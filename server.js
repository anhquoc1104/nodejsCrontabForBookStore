const express = require("express");
require("dotenv").config();
let CronJob = require("cron").CronJob;

const app = express();

// Model
let Cart = require("./models/carts.models.js");
let Transaction = require("./models/transactions.models.js");

let port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1>Crontab for BookStore</h1>");
});

let job = new CronJob(
  "* * * * *",
  function () {
    console.log("You will see this message every minute");
  },
  null,
  true,
  "America/Los_Angeles"
);

// listen for requests :)
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
