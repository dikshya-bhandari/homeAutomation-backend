const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/index");
app.use(cors());
const PORT = 4000;
mongoose.connect(
  "mongodb+srv://shivaaryalj7:random-password99@cluster0-czbq7.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true },
  () => {
    console.log("i am connected");
  }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", routes);

app.use("/api", (req, res) => {
  console.log("i am called");
});

app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
