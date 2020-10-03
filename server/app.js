const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const cors = require("cors");

require("dotenv/config");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//ROUTES
const studentsRoute = require("./routes/students");
app.use("/students", studentsRoute);

// app.get("/", (req, res) => {
//   res.send("home");
// });
const database = process.env.DB_CONNECTION;
mongoose.connect(
  database,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("DB Error!");
    } else {
      console.log("connected to DB");
    }
  }
);
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../frontend/build"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;
