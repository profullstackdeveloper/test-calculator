const express = require("express");
const calculatorRoute = require("./routes/calculator.route");
const authRoute = require("./routes/auth.route");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");


app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/api", calculatorRoute);
app.use("/api", authRoute);

const port = process.env.PORT | 8080

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
module.exports = app;
