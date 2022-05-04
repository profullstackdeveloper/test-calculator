var express = require("express");
var router = express.Router();
var calculatorCtrl = require("../controllers/calculator.controller");
var authCtrl = require("../controllers/auth.controller");

router
  .route("/calculate")
  .post(authCtrl.requireSignin, calculatorCtrl.calculator);

module.exports = router;
